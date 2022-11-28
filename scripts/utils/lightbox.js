import { firstNameValue } from "../utils/firstName.js";

/**
 * Enables / disables the lightbox
 */
export function triggerLightbox(medias, media, photographer) {
  const lightbox = document.querySelector(".lightbox");

  if (lightbox) {
    closeLightbox(lightbox);
    return;
  }

  // Curr index?
  let currIndex = medias.findIndex((el) => el.id === media.id);
  displayLightbox(currIndex, medias, photographer);
  setImgOrVideo(currIndex, medias, photographer);

  /**
   * Displays the next image / video
   */
  const nextItem = () => {
    const lightboxContent = document.querySelector(".lightbox__content");
    lightboxContent.remove();

    currIndex = currIndex += 1;

    setImgOrVideo(currIndex, medias, photographer);
  };

  /**
   * Displays the previous image / video
   */
  const previousItem = () => {
    const lightboxContent = document.querySelector(".lightbox__content");
    lightboxContent.remove();

    currIndex = currIndex -= 1;

    //TODO : currIndex = newIndex ?
    setImgOrVideo(currIndex, medias, photographer);
  };

  const lightboxNext = document.querySelector(".lightbox__next");
  lightboxNext.addEventListener("click", nextItem);

  const lightboxPrev = document.querySelector(".lightbox__prev");
  lightboxPrev.addEventListener("click", previousItem);
}

/**
 * Displays the lightbox in DOM
 */
function displayLightbox() {
  // Affichage du cadre de la lightbox dans le DOM
  //DOM Elements
  const main = document.getElementById("main");
  const lightbox = document.createElement("div");
  const lightboxContainer = document.createElement("div");
  const lightboxNext = document.createElement("button");
  const lightboxPrev = document.createElement("button");
  const lightboxClose = document.createElement("button");

  //Class allocation
  lightbox.classList.add("lightbox");
  lightboxNext.classList.add("lightbox__next");
  lightboxPrev.classList.add("lightbox__prev");
  lightboxClose.classList.add("lightbox__close");
  lightboxContainer.classList.add("lightbox__container");

  lightboxClose.addEventListener("click", () => {
    closeLightbox(lightbox);
  });

  //Display of Elements
  lightbox.appendChild(lightboxNext);
  lightbox.appendChild(lightboxPrev);
  lightbox.appendChild(lightboxClose);
  lightbox.appendChild(lightboxContainer);
  main.appendChild(lightbox);
}

/**
 * Closes the lightbox
 */
function closeLightbox(lightbox) {
  lightbox.remove();
}

/**
 * Sets the right image / video on the screen
 */
function setImgOrVideo(currIndex, medias, photographer) {
  const name = photographer.name;
  const firstName = firstNameValue(name);
  const lightboxContainer = document.querySelector(".lightbox__container");

  const imgtest = document.createElement("img");
  const vidtest = document.createElement("video");
  imgtest.setAttribute("class", "lightbox__content");
  vidtest.setAttribute("class", "lightbox__content");
  const i = currIndex;
  const imgmedia = medias[i];
  const vidmedia = medias[i];
  console.log(imgmedia);
  if (imgmedia.image) {
    imgtest.src = `assets/media/${firstName}/` + imgmedia.image;
    lightboxContainer.appendChild(imgtest);
  } else {
    vidtest.src = `assets/media/${firstName}/` + vidmedia.video;
    vidtest.setAttribute("controls", " ");
    lightboxContainer.appendChild(vidtest);
  }
  // Retrouver le bon média dans le tableau de médias à partir de l'index passé en argument
  // if image
  // insérer l'image dans le DOM
  // else
  // insérer la vidéo dans le DOM
}
