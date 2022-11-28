export function photographerFactory(data) {
  //Attribution des données provenant de photographers.json
  const { name, id, city, country, tagline, price, portrait } = data;
  const picture = `assets/photographers/${portrait}`;

  function photographerHeader() {
    //DOM Elements
    const header = document.querySelector(".photograph-header");
    const h1 = document.createElement("h1");
    const cityCountryContainer = document.createElement("p");
    const taglineContainer = document.createElement("p");
    const img = document.createElement("img");
    const div = document.createElement("div");
    //Attributes allocation
    h1.setAttribute("id", "photograph-header-h1");
    div.setAttribute("class", "photograph-header-text");
    img.setAttribute("src", picture);
    cityCountryContainer.setAttribute("class", "city-country");
    taglineContainer.setAttribute("class", "tagline");
    //Content allocation
    h1.textContent = name;
    cityCountryContainer.textContent = city + ", " + country;
    taglineContainer.textContent = tagline;
    //Elements Display
    div.appendChild(h1);
    div.appendChild(cityCountryContainer);
    div.appendChild(taglineContainer);
    header.appendChild(div);
    header.appendChild(img);

    return header;
  }

  function getUserCardDOM() {
    //DOM Elements
    const article = document.createElement("article");
    const img = document.createElement("img");
    const h2 = document.createElement("h2");
    const a = document.createElement("a");
    const cityCountryContainer = document.createElement("p");
    const taglineContainer = document.createElement("p");
    const priceContainer = document.createElement("p");
    //Attributes allocation
    cityCountryContainer.setAttribute("class", "city-country");
    taglineContainer.setAttribute("class", "tagline");
    priceContainer.setAttribute("class", "price");
    img.setAttribute("src", picture);
    a.setAttribute("href", `/photographer.html?id=${id}`);
    //Content allocation
    h2.textContent = name;
    cityCountryContainer.textContent = city + ", " + country;
    taglineContainer.textContent = tagline;
    priceContainer.textContent = price + "€/jour";
    //Elements Display
    a.appendChild(img);
    a.appendChild(h2);
    article.appendChild(a);
    article.appendChild(cityCountryContainer);
    article.appendChild(taglineContainer);
    article.appendChild(priceContainer);

    return article;
  }
  return { name, picture, price, getUserCardDOM, photographerHeader };
}
