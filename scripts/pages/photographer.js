import { photographerFactory } from "../factories/photographer.js";
import { mediaFactory } from "../factories/media.js";
import { triggerLightbox } from "../utils/Lightbox.js";
import { sortByPopularity } from "../utils/sort.js";
import { sortByDate } from "../utils/sort.js";
import { sortByTitle } from "../utils/sort.js";
// import { firstNameValue } from "../utils/firstName.js";
import { displayModal } from "../utils/contactForm.js";

/**
 * Retrieves data from the JSON file
 *
 * @return Array<media, photographer>
 */
async function getData() {
  const data = await fetch("/data/photographers.json");
  const dataJSON = await data.json();
  return dataJSON;
}

/**
 * Retrieves media from a specific photographer
 *
 * @return Array<media>
 */
async function getMedia(data) {
  const URL = window.location.search;
  const searchParams = new URLSearchParams(URL);
  const id = parseInt(searchParams.get("id"));
  const medias = data.media;
  const result = medias.filter((media) => media.photographerId === id);
  return result;
}

/**
 * Retrieves a specific photographer from URL
 *
 * @return Object
 */
async function getPhotographer(data) {
  const URL = window.location.search;
  const searchParams = new URLSearchParams(URL);
  const id = parseInt(searchParams.get("id"));
  const photographers = data.photographers;
  const result = photographers.filter((photographer) => photographer.id === id);
  return result[0];
}

/**
 * Displays photographer
 *
 * @return
 */
async function displayPhotographer(photographer) {
  const main = document.getElementById("main");
  const photographModel = photographerFactory(photographer);
  const photographerHeader = photographModel.photographerHeader();
  main.appendChild(photographerHeader);
}

/**
 * Displays media
 *
 * @return Array<media>
 */
async function displayMedia(medias, photographer) {
  const main = document.getElementById("main");
  const photographMediaDiv = document.createElement("div");
  photographMediaDiv.setAttribute("class", "gallery");
  main.appendChild(photographMediaDiv);
  medias.forEach((media) => {
    const photographMedia = mediaFactory(media, photographer);
    const photographerMedia = photographMedia.photographMedia();
    photographMediaDiv.appendChild(photographerMedia);

    photographerMedia.firstChild.addEventListener("click", () => {
      triggerLightbox(medias, media, photographer);
    });
    //photographMediaDiv = cr??e l'??l??ment html div class = media-photos
    //photographMedia = cr??e la section medias de photographer.html
    //photographerMedia = r??sultat de la mediafactory avec le photographe de la page
  });
}

/**
 * Calculates the total number of likes, Retrieves the price from medias
 *
 * @return totalLikes
 */
function getTotalLikesAndPrice(medias) {
  let totalLikes = 0;
  medias.forEach((media) => {
    totalLikes += media.likes;
  });
  return totalLikes;
}

/**
 * Displays the price and the total number of likes
 *
 * @return insert
 */

function displayTotalLikesAndPrice(totalLikes, photographer) {
  //DOM Elements
  const price = photographer.price;
  const insert = document.createElement("div");
  const divTotalLikesAndIcon = document.createElement("div");
  const divTotalLikes = document.createElement("div");
  const divTotalLikesIcon = document.createElement("i");
  const divPrice = document.createElement("div");
  //Attribution de classes
  insert.setAttribute("class", "total-box");
  divPrice.setAttribute("class", "price");
  divPrice.innerText = price + "??? / jour";
  divTotalLikesIcon.setAttribute("class", "fa-sharp fa-solid fa-heart");
  divTotalLikesAndIcon.setAttribute("class", "total-likes-icon");
  divTotalLikes.setAttribute("class", "total-likes");
  divTotalLikes.innerText = totalLikes;
  divTotalLikesAndIcon.appendChild(divTotalLikes);
  divTotalLikesAndIcon.appendChild(divTotalLikesIcon);
  insert.appendChild(divTotalLikesAndIcon);
  insert.appendChild(divPrice);
  main.appendChild(insert);
  return insert;
}

async function addLike() {
  const likes = document.getElementsByClassName("icon");
  const totalLikes = document.querySelector(".total-likes");

  // Incr??mente le nombre de likes
  for (let i = 0; i < likes.length; i++) {
    let likeBtn = likes[i];

    likeBtn.addEventListener("click", () => {
      likeBtn.classList.toggle("selected");
      let counter = likeBtn.parentElement.children[0];

      console.log(counter);
      if (likeBtn.classList.contains("selected")) {
        counter.innerText++;
        totalLikes.innerText++;
        likeBtn.style.color = "#D3573C";
      } else {
        counter.innerText--;
        totalLikes.innerText--;
        likeBtn.style.color = "#901C1C";
      }
    });
  }
}

async function displayGalleryOptions(photographer) {
  const main = document.getElementById("main");
  const photographModel = photographerFactory(photographer);
  const galleryOptions = photographModel.galleryOptions();
  main.appendChild(galleryOptions);
}

/**
 * Initializes every function
 *
 * @return totalLikes
 */
async function init() {
  // R??cup??ration des donn??es
  const data = await getData();

  // Affichage des infos du photographe
  const photographer = await getPhotographer(data);
  displayPhotographer(photographer);
  displayGalleryOptions(photographer);
  //Affichage de la modale de contact
  const contactButton = document.querySelector(".contact_button");
  contactButton.addEventListener("click", displayModal(photographer));

  // Affichage de la galerie de m??dias
  let medias = await getMedia(data);

  document.querySelector(".liste").addEventListener("click", (e) => {
    switch (e.target.value) {
      case "popularite":
        medias = sortByPopularity(medias);
        document.querySelector(".gallery").remove();
        displayMedia(medias, photographer);
        document.querySelector(
          ".gallery__options--sort"
        ).innerHTML = `Popularit?? <i class="fa-solid fa-chevron-down"></i>`;
        return;

      case "date":
        medias = sortByDate(medias);
        document.querySelector(".gallery").remove();
        displayMedia(medias, photographer);
        document.querySelector(
          ".gallery__options--sort"
        ).innerHTML = `Date <i class="fa-solid fa-chevron-down"></i>`;
        return;

      case "titre":
        medias = sortByTitle(medias);
        document.querySelector(".gallery").remove();
        displayMedia(medias, photographer);
        document.querySelector(
          ".gallery__options--sort"
        ).innerHTML = `Titre <i class="fa-solid fa-chevron-down"></i>`;
        return;

      default:
        break;
    }
  });
  displayMedia(medias, photographer);

  // Affichage du total de likes
  const totalLikes = getTotalLikesAndPrice(medias, photographer);
  displayTotalLikesAndPrice(totalLikes, photographer);

  //Incr??mente les likes
  addLike();
}
init();
