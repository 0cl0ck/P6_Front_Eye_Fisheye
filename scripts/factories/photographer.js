export function photographerFactory(data) {
  const { name, id, city, country, tagline, price, portrait } = data;

  const picture = `assets/photographers/${portrait}`;

  function photographerHeader() {
    const header = document.querySelector(".photograph-header");
    const h1 = document.createElement("h1");
    const p = document.createElement("p");
    const p1 = document.createElement("p");
    const img = document.createElement("img");
    const div = document.createElement("div");
    h1.setAttribute("id", "photograph-header-h1");
    div.setAttribute("class", "photograph-header-text");
    img.setAttribute("src", picture);
    p.setAttribute("class", "p");
    p1.setAttribute("class", "p1");
    h1.textContent = name;
    p.textContent = city + ", " + country;
    p1.textContent = tagline;
    div.appendChild(h1);
    div.appendChild(p);
    div.appendChild(p1);
    header.appendChild(div);
    header.appendChild(img);

    return header;
  }

  function getUserCardDOM() {
    const article = document.createElement("article");
    const img = document.createElement("img");
    const h2 = document.createElement("h2");
    const a = document.createElement("a");
    const p0 = document.createElement("p");
    const p1 = document.createElement("p");
    const p2 = document.createElement("p");
    p0.setAttribute("class", "p0");
    p1.setAttribute("class", "p1");
    p2.setAttribute("class", "p2");
    img.setAttribute("src", picture);
    a.setAttribute("href", `/photographer.html?id=${id}`);
    h2.textContent = name;
    a.appendChild(img);
    a.appendChild(h2);
    article.appendChild(a);
    //Création du texte pour la ville
    p0.textContent = city + ", " + country;
    article.appendChild(p0);
    //Création du texte pour la tagline, ainsi que du paragraphe pour le prix
    p1.textContent = tagline;
    p2.textContent = price + "€/jour";
    article.appendChild(p1);
    article.appendChild(p2);

    return article;
  }
  return { name, picture, getUserCardDOM, photographerHeader };
}
