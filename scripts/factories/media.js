export function mediaFactory(data, photographer) {
  function photographMedia() {
    const { id, photographerId, title, likes, date, price, image } = data;
    const name = photographer.name;
    console.log(image);

    const firstName = prenom(name);
    console.log(firstName);

    const medias = document.createElement("div");
    const main = document.getElementById("main");
    const article = document.createElement("article");
    const img = document.createElement("img");
    const input = document.createElement("input");
    const p8 = document.createElement("p");
    const p10 = document.createElement("p");
    const imgLikes = document.createElement("img");
    const pic = `assets/media/${firstName}/${image}`;
    img.setAttribute("src", pic);
    article.appendChild(img);
    main.appendChild(article);
    return article;
  }
  return { photographMedia };
}
function prenom(value) {
  const words = value.split(" ");
  let firstName = words[0];

  if (firstName.includes("-")) {
    firstName = firstName.replace("-", " ");
  }

  return firstName;
}
