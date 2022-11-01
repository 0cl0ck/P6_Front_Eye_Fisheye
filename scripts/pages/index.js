import { photographerFactory } from "../factories/photographer.js";

async function getPhotographers() {
  const data = await fetch("/data/photographers.json");
  const dataJSON = await data.json();
  console.log(dataJSON);
  const photographers = dataJSON.photographers;
  console.log(photographers);
  return { photographers: dataJSON.photographers };
}

async function displayData(photographers) {
  const photographersSection = document.querySelector(".photographer_section");

  photographers.forEach((photographer) => {
    const photographerModel = photographerFactory(photographer);
    const userCardDOM = photographerModel.getUserCardDOM();
    photographersSection.appendChild(userCardDOM);
  });
}

async function init() {
  // Récupère les datas des photographes
  const { photographers } = await getPhotographers();
  displayData(photographers);
}

init();
