/**
 * Enables / disables the lightbox
 */
export function triggerLightbox(e, data) {
  const lightbox = document.querySelector(".lightbox");

  if (lightbox) {
    closeLightbox(lightbox);
    return;
  }

  displayLightbox();
  console.log(data);

  // Curr index?
  // const currIndex = medias.findIndex((el) => el.id === media.id);
  // console.log(currIndex);
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

  const imgtest = document.createElement("img");
  imgtest.src = "https://picsum.photos/200";
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
function nextItem() {
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
function setImgOrVideo(medias, currIndex) {
  // Retrouver le bon média dans le tableau de médias à partir de l'index passé en argument
  // if image
  // insérer l'image dans le DOM
  // else
  // insérer la vidéo dans le DOM
}
