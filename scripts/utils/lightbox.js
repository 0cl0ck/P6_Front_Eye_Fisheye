/**
 * Enables / disables the lightbox
 */
export function triggerLightbox(medias) {
  console.log(medias);
  const img = document.querySelector("img");
  img.addEventListener("click", displayLightbox());

  // Au clic, afficher la lightbox
  // displayLightbox()
  // Si la lightbox est déjà ouverte, la fermer
  // if (...)
  // closeLightbox()
  // Récupérer l'index du média cliqué -> besoin du tableau de médias (findIndex)
  // const currIndex = ?
  // Afficher l'image / la vidéo correspondante
  // setImgOrVideo(currIndex)
  // EventListener qui délenchent nextItem(currIndex) et previousItem(currIndex)
  //Normalement toutes les fonctions se retrouvent ici
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

  //Display of Elements
  lightbox.appendChild(lightboxNext);
  lightbox.appendChild(lightboxPrev);
  lightbox.appendChild(lightboxClose);
  lightbox.appendChild(lightboxContainer);
  main.appendChild(lightbox);

  //   <div class="lightbox">
  //   <button class="lightbox__close">Fermer</button>
  //   <button class="lightbox__next">Suivant</button>
  //   <button class="lightbox__previous">Précédent</button>
  //   <div class="lightbox__container">
  //     <img src="assets\media\Marcel\Architecture_Contrast.jpg" alt="" />
  //   </div>
  // </div>
  // <div class="img-container"></div>
}

/**
 * Closes the lightbox when clicking on the cross
 */
function closeLightbox() {
  // remove() pour supprimer l'élément DOM
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
function setImgOrVideo() {
  // Retrouver le bon média dans le tableau de médias à partir de l'index passé en argument
  // if image
  // insérer l'image dans le DOM
  // else
  // insérer la vidéo dans le DOM
}
