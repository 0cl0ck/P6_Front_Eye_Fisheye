import { photographerFactory } from "../factories/photographer.js";
import { mediaFactory } from "../factories/media.js";

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

async function getPhotographer(data) {
  const URL = window.location.search;
  const searchParams = new URLSearchParams(URL);
  const id = parseInt(searchParams.get("id"));
  const photographers = data.photographers;
  const result = photographers.filter((photographer) => photographer.id === id);
  return result[0];
}

async function displayPhotographer(photographer) {
  const photographHeaderDiv = document.getElementById("main");
  const photographModel = photographerFactory(photographer);
  const photographerHeader = photographModel.photographerHeader();
  photographHeaderDiv.appendChild(photographerHeader);
}

async function displayMedia(medias, photographer) {
  const main = document.getElementById("main");
  const photographMediaDiv = document.createElement("div");
  photographMediaDiv.setAttribute("class", "media-photos");
  main.appendChild(photographMediaDiv);
  medias.forEach((media) => {
    const photographMedia = mediaFactory(media, photographer);
    const photographerMedia = photographMedia.photographMedia();
    photographMediaDiv.appendChild(photographerMedia);
  });
}

function getTotalLikes(medias) {
  let totalLikes = 0;
  medias.forEach((media) => {
    totalLikes += media.likes;
  });
  return totalLikes;
}

function displayTotalLikes(totalLikes) {
  // Afficher le total dans le DOM
  //DOM Elements
  const insert = document.createElement("div");
  insert.setAttribute("class", "total-box");
  insert.innerText = totalLikes;
  main.appendChild(insert);
}

async function init() {
  // Récupération des données
  const data = await getData();

  // Affichage des infos du photographe
  const photographer = await getPhotographer(data);
  displayPhotographer(photographer);

  // Affichage de la galerie de médias
  const medias = await getMedia(data);
  displayMedia(medias, photographer);

  // Affichage du total de likes
  const totalLikes = getTotalLikes(medias);
  displayTotalLikes(totalLikes);
}
init();
