import { firstNameValue } from "../utils/firstName.js";
/**
 * Enables / disables the lightbox
 */
export function triggerLightbox(medias, media, photographer) {
  const lightbox = document.querySelector(".lightbox");
  console.log(photographer);

  if (lightbox) {
    closeLightbox(lightbox);
    return;
  }

  //console.log('lightbox', medias, media);

  // Curr index?
  const currIndex = medias.findIndex((el) => el.id === media.id);
  console.log(currIndex);
  displayLightbox(currIndex, medias, photographer);
  nextItem(currIndex);
  return currIndex;
}
/**
 * Displays the lightbox with the right image / video
 */
function displayLightbox(currIndex, medias, photographer) {
  // Affichage du cadre de la lightbox dans le DOM
  const name = photographer.name;
  const firstName = firstNameValue(name);

  //DOM Elements
  const main = document.getElementById("main");
  const lightbox = document.createElement("div");
  const lightboxContainer = document.createElement("div");
  const lightboxNext = document.createElement("button");
  const lightboxPrev = document.createElement("button");
  const lightboxClose = document.createElement("button");

  const imgtest = document.createElement("img");
  const i = currIndex;
  console.log(i);
  const imgmedia = medias[i];
  console.log(imgmedia.image);

  imgtest.src = `assets/media/${firstName}/` + imgmedia.image;
  lightboxContainer.appendChild(imgtest);

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
 * Displays the next image / video
 */
function nextItem(currIndex) {
  console.log(currIndex);
  const newIndex = currIndex++;
  //TODO :foutre toute la construction de ce qui s'affiche dans la lightbox dans setImgOrVideo

  // Calcul pour déterminer l'index du média suivant (currIndex + 1)
  // const newIndex = ?
  // setImgOrVideo(newIndex)
}

/**
 * Displays the previous image / video
 */
function previousItem() {
  // Calcul pour déterminer l'index du média précédent (currIndex - 1)
  // const newIndex = ?
  // setImgOrVideo(newIndex)
}

/**
 * Sets the right image / video on the screen
 */
function setImgOrVideo() {
  // Retrouver le bon média dans le tableau de médias à partir de l'index passé en argument
  // if image
  // insérer l'image dans le DOM
  // else
  // insérer la vidéo dans le DOM
}
