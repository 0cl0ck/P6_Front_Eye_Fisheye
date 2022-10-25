import { photographerFactory } from "../factories/photographer.js";

async function getData() {
  const data = await fetch("/data/photographers.json");
  const dataJSON = await data.json();
  return dataJSON;
}

async function getMedia() {}

async function getPhotographer(data) {
  const URL = window.location.search;
  const searchParams = new URLSearchParams(URL);
  const id = parseInt(searchParams.get("id"));
  const photographers = data.photographers;
  const result = photographers.filter((photographer) => photographer.id === id);
  return result[0];
}

// photographHeaderFactory(data) {
//   const   const { name, id, city, country, tagline, price, portrait } = data;
//   console.log(data);

//   const picture = `assets/photographers/${portrait}`;

// }

async function displayPhotographer(photographer) {
  const photographHeaderDiv = document.getElementById("main");

  const photographModel = photographerFactory(photographer);
  const photographerHeader = photographModel.photographerHeader();
  console.log(photographerHeader);
  photographHeaderDiv.appendChild(photographerHeader);
}

async function init() {
  const data = await getData();
  const photographer = await getPhotographer(data);
  displayPhotographer(photographer);
  const media = await getMedia();
  console.log(media);
}
init();
