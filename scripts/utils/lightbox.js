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
  displayLightbox(currIndex, medias, photographer);
  setImgOrVideo(currIndex, medias, photographer);
  nextItem(currIndex, medias, photographer);
  previousItem(currIndex, medias, photographer);

  return currIndex;
}
/**
 * Displays the lightbox with the right image / video
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
 * Displays the next image / video
 */
function nextItem(currIndex, medias, photographer) {
  const lightboxNext = document.querySelector(".lightbox__next");
  lightboxNext.addEventListener("click", () => {
    const lightboxImg = document.querySelector(".lightbox__img");
    lightboxImg.remove();

    const newIndex = (currIndex += 1);

    setImgOrVideo(newIndex, medias, photographer);
  });
  // Calcul pour déterminer l'index du média suivant (currIndex + 1)
  // const newIndex = ?
  // setImgOrVideo(newIndex)
}

/**
 * Displays the previous image / video
 */
function previousItem(currIndex, medias, photographer) {
  const lightboxPrev = document.querySelector(".lightbox__prev");
  lightboxPrev.addEventListener("click", () => {
    const lightboxImg = document.querySelector(".lightbox__img");
    lightboxImg.remove();

    const newIndex = (currIndex -= 1);

    //TODO : currIndex = newIndex ?
    setImgOrVideo(newIndex, medias, photographer);
  });
  // Calcul pour déterminer l'index du média précédent (currIndex - 1)
  // const newIndex = ?
  // setImgOrVideo(newIndex)
}

/**
 * Sets the right image / video on the screen
 */
function setImgOrVideo(currIndex, medias, photographer) {
  const name = photographer.name;
  const firstName = firstNameValue(name);
  const lightboxContainer = document.querySelector(".lightbox__container");

  const imgtest = document.createElement("img");
  imgtest.setAttribute("class", "lightbox__img");
  const i = currIndex;
  const imgmedia = medias[i];

  imgtest.src = `assets/media/${firstName}/` + imgmedia.image;
  lightboxContainer.appendChild(imgtest);
  // Retrouver le bon média dans le tableau de médias à partir de l'index passé en argument
  // if image
  // insérer l'image dans le DOM
  // else
  // insérer la vidéo dans le DOM
}
