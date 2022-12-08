import { firstNameValue } from "../utils/firstName.js";

/**
 * Enables / disables the lightbox
 */
export function triggerLightbox(medias, media, photographer) {
  const lightbox = document.querySelector(".lightbox");
  //Si la lightbox est ouverte, on ferme la lightbox.
  if (lightbox) {
    closeLightbox(lightbox);
    return;
  }

  //currIndex retourne l'index du media cliqué.
  let currIndex = medias.findIndex((el) => el.id === media.id);

  //On appelle la fonction displayLightbox pour afficher la lightbox,
  displayLightbox();

  //Puis on appelle la fonction setImgOrVideo pour déterminer le contenu de la lightbox
  setImgOrVideo(currIndex, medias, photographer);

  /**
   * Displays the next image / video
   */

  const nextItem = () => {
    //DOM du contenu de la lightbox
    const lightboxContent = document.querySelector(".lightbox__content");
    //On supprime le contenu de la lightbox
    lightboxContent.remove();
    //On incrémente l'index du média
    currIndex = currIndex += 1;
    //On appelle la fonction setImgOrVideo pour déterminer le média suivant.
    setImgOrVideo(currIndex, medias, photographer);
  };

  /**
   * Displays the previous image / video
   */
  const previousItem = () => {
    //DOM du contenu de la lightbox
    const lightboxContent = document.querySelector(".lightbox__content");
    //On supprime le contenu de la lightbox
    lightboxContent.remove();
    //On décrémente l'index du média
    currIndex = currIndex -= 1;
    //On appelle la fonction setImgOrVideo pour déterminer le média précédent.
    setImgOrVideo(currIndex, medias, photographer);
  };

  //DOM Elements
  const lightboxNext = document.querySelector(".lightbox__next");
  const lightboxPrev = document.querySelector(".lightbox__previous");
  //Event Listeners
  lightboxNext.addEventListener("click", nextItem);
  lightboxPrev.addEventListener("click", previousItem);
  //Accessbilité Lightbox
  // window.addEventListener("keydown", (e) => {
  //   const lightbox = document.querySelector(".lightbox");

  //   if (lightbox && e.key == 37) {
  //     previousItem;
  //   }
  // });
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
  lightboxPrev.classList.add("lightbox__previous");
  lightboxClose.classList.add("lightbox__close");
  lightboxContainer.classList.add("lightbox__container");

  //Event Listeners
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
  //DOM Elements
  const lightboxContainer = document.querySelector(".lightbox__container");
  const imgMedia = document.createElement("img");
  const vidMedia = document.createElement("video");
  //Pour déterminer le chemin d'accès du media, récupère le prénom du photographe
  const name = photographer.name;
  const firstName = firstNameValue(name);

  //Class allocation
  imgMedia.setAttribute("class", "lightbox__content");
  vidMedia.setAttribute("class", "lightbox__content");

  //On définit l'index du media avec i, puis on nomme une variable pour le situer dans le tableau des medias
  const i = currIndex;
  const media = medias[i];

  //Si le media sélectionné est une image, on l'affiche, sinon, on affiche une vidéo
  if (media.image) {
    imgMedia.src = `assets/media/${firstName}/` + media.image;
    lightboxContainer.appendChild(imgMedia);
  } else {
    vidMedia.src = `assets/media/${firstName}/` + media.video;
    vidMedia.setAttribute("controls", " ");
    lightboxContainer.appendChild(vidMedia);
  }
}

//TODO: Mettre en place le previous sur la première image ainsi que le next sur la dernière.
