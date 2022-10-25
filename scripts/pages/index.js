// Penser à remplacer par les données récupérées dans le json

//   const photographers = fetch("data/photographers.json")
//     .then(function (response) {
//       if (response.ok) {
//         console.log(response);
//         return response.json();
//       }
//     })
//     .then(function (photographersData) {
//       return photographersData.photographers;
//     })
//     .catch(function (response) {
//       console.error(`Retour du serveur : `, response.status);
//     });
//   //et bien retourner le tableau photographers seulement une fois
//   return {
//     photographers: [...photographers, ...photographers, ...photographers],
//   };
// }
// function (photographersData) {

// }

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
