/**
 * Enables / disables the lightbox
 */
export function triggerLightbox() {
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
