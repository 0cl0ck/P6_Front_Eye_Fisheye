export function mediaFactory(data, photographer) {
  function photographMedia() {
    //DOM Datas
    const { id, photographerId, title, likes, date, price, image, video } =
      data;
    const name = photographer.name;
    const firstName = prenom(name);
    //DOM Elements
    const main = document.getElementById("main");
    const article = document.createElement("article");
    const input = document.createElement("input");
    //DOM Title & Likes
    const divTitleAndLikes = document.createElement("div");
    const titles = document.createElement("p");
    const likesAndIcon = document.createElement("div");
    const likesIcon = document.createElement("i");
    const likesNumber = document.createElement("p");
    //DOM Total likes & Price
    const divLikesAndPrice = document.createElement("div");

    // const totalLikes = { ...likes };
    // console.log(totalLikes);
    // // const array = [{ likes }];
    // // console.log(likes);
    // // console.log(likes);

    // let totalCounter = document.querySelector(".totalCounter");
    // total = 0;
    // images.forEach((image) => total += Number(image.likes));
    // totalCounter.value = total ;

    //DOM Medias
    const img = document.createElement("img");
    const vid = document.createElement("video");
    const sourceImg = `assets/media/${firstName}/${image}`;
    const sourceVid = `assets/media/${firstName}/${video}`;

    //Process image or video
    if (image) {
      img.setAttribute("src", sourceImg);
      article.appendChild(img);
    } else {
      vid.setAttribute("src", sourceVid);
      article.appendChild(vid);
    }

    //Creation du titre et des likes
    likesNumber.setAttribute("class", "likes");
    divTitleAndLikes.setAttribute("class", "title-likes");
    likesAndIcon.setAttribute("class", "icon-likes");
    likesIcon.setAttribute("class", "fa-sharp fa-solid fa-heart");
    titles.innerText = title;
    likesNumber.innerText = likes;

    //Creation de l'article
    likesAndIcon.appendChild(likesNumber);
    likesAndIcon.appendChild(likesIcon);
    divTitleAndLikes.appendChild(titles);
    divTitleAndLikes.appendChild(likesAndIcon);
    article.appendChild(divTitleAndLikes);

    //Creation de l'encart

    main.appendChild(divLikesAndPrice);

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
