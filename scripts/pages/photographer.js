import { photographerFactory } from "../factories/photographer.js";
import { mediaFactory } from "../factories/media.js";

async function getData() {
  const data = await fetch("/data/photographers.json");
  const dataJSON = await data.json();
  return dataJSON;
}

async function getMedia(data) {
  const URL = window.location.search;
  const searchParams = new URLSearchParams(URL);
  const id = parseInt(searchParams.get("id"));
  const medias = data.media;
  console.log(medias);
  const result = medias.filter((media) => media.photographerId === id);
  console.log(result);
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

async function displayMedia(media, photographer) {
  const photographMediaDiv = document.getElementById("main");
  const photographMedia = mediaFactory(media, photographer);
  const photographerMedia = photographMedia.photographMedia();
  photographMediaDiv.appendChild(photographerMedia);
}

async function init() {
  const data = await getData();
  const photographer = await getPhotographer(data);
  displayPhotographer(photographer);
  const media = await getMedia(data);
  console.log(media);
  displayMedia(media, photographer);
}
init();
