export function photographerFactory(data) {
  //Attribution des données provenant de photographers.json
  const { name, id, city, country, tagline, price, portrait } = data;
  const picture = `assets/photographers/${portrait}`;

  function photographerHeader() {
    //DOM Elements
    const header = document.querySelector(".photograph-header");
    const h1 = document.createElement("h1");
    const locationContainer = document.createElement("p");
    const taglineContainer = document.createElement("p");
    const img = document.createElement("img");
    const div = document.createElement("div");
    //Attributes allocation
    h1.setAttribute("id", "photograph-header-h1");
    div.setAttribute("class", "photograph-header-text");
    img.setAttribute("src", picture);
    img.setAttribute("alt", name);
    locationContainer.setAttribute("class", "location");
    taglineContainer.setAttribute("class", "tagline");
    //Content allocation
    h1.textContent = name;
    locationContainer.textContent = city + ", " + country;
    taglineContainer.textContent = tagline;
    //Elements Display
    div.appendChild(h1);
    div.appendChild(locationContainer);
    div.appendChild(taglineContainer);
    header.appendChild(div);
    header.appendChild(img);

    return header;
  }

  function galleryOptions() {
    //DOM Elements
    const div = document.createElement("div");
    const label = document.createElement("label");
    const wrapper = document.createElement("div");
    const btnSelect = document.createElement("button");
    const sortList = document.createElement("div");
    const popularite = document.createElement("button");
    const date = document.createElement("button");
    const titre = document.createElement("button");

    sortList.setAttribute("class", "liste");
    //Attribute & value allocation
    div.setAttribute("class", "gallery__options");
    btnSelect.setAttribute("class", "gallery__options--sort");
    popularite.setAttribute("class", "gallery__options--popularite");
    date.setAttribute("class", "gallery__options--date");
    titre.setAttribute("class", "gallery__options--titre");

    btnSelect.innerText = "Choisir";
    label.innerText = "Trier par";

    popularite.value = "popularite";
    popularite.innerText = "Popularité";

    date.value = "date";
    date.innerText = "Date";

    titre.value = "titre";
    titre.innerText = "Titre";

    //Display Elements
    sortList.appendChild(popularite);
    sortList.appendChild(date);
    sortList.appendChild(titre);

    div.appendChild(label);
    div.appendChild(wrapper);
    wrapper.appendChild(btnSelect);
    wrapper.appendChild(sortList);

    const toggleList = () => {
      if (sortList.style.display === "flex") {
        sortList.style.display = "none";
      } else {
        sortList.style.display = "flex";
      }
    };

    btnSelect.addEventListener("click", toggleList);

    sortList.addEventListener("click", toggleList);

    return div;
  }

  function getUserCardDOM() {
    //DOM Elements
    const article = document.createElement("article");
    const img = document.createElement("img");
    const h2 = document.createElement("h2");
    const a = document.createElement("a");
    const locationContainer = document.createElement("p");
    const taglineContainer = document.createElement("p");
    const priceContainer = document.createElement("p");
    //Attributes allocation
    locationContainer.setAttribute("class", "location");
    taglineContainer.setAttribute("class", "tagline");
    priceContainer.setAttribute("class", "price");
    img.setAttribute("src", picture);
    img.setAttribute("alt", "Portrait de " + name);
    a.setAttribute("href", `/photographer.html?id=${id}`);
    //Content allocation
    h2.textContent = name;
    locationContainer.textContent = city + ", " + country;
    taglineContainer.textContent = tagline;
    priceContainer.textContent = price + "€/jour";
    //Elements Display
    a.appendChild(img);
    a.appendChild(h2);
    article.appendChild(a);
    article.appendChild(locationContainer);
    article.appendChild(taglineContainer);
    article.appendChild(priceContainer);

    return article;
  }
  return {
    name,
    picture,
    price,
    getUserCardDOM,
    photographerHeader,
    galleryOptions,
  };
}
