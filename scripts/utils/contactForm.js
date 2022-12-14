const contactButton = document.querySelector(".contact_button");

contactButton.addEventListener("click", displayModal);
export function displayModal(photographer) {
  console.log(photographer);
  const name = photographer.name;

  //   const firstName = firstNameValue(name);
  const modale = document.getElementById("contact_modal");

  if (modale) {
    modale.style.display = "flex";
    return;
  }

  //DOM Elements
  //   const modal = document.getElementById("contact_modal");
  const main = document.getElementById("main");
  const contactModal = document.createElement("div");
  const modal = document.createElement("div");
  const header = document.querySelector("header");
  const headerLink = document.querySelector(".logo");
  const contactHeader = document.createElement("Header");
  const h2 = document.createElement("h2");
  const imgClose = document.createElement("img");
  const form = document.createElement("form");
  const formContent = document.createElement("div");
  const labelFirstName = document.createElement("label");
  const labelName = document.createElement("label");
  const labelEmail = document.createElement("label");
  const labelMessage = document.createElement("label");
  const inputFirstName = document.createElement("input");
  const inputName = document.createElement("input");
  const inputEmail = document.createElement("input");
  const inputMessage = document.createElement("input");
  const contactButton = document.createElement("button");

  //Attributes allocation
  contactModal.setAttribute("id", "contact_modal");
  modal.setAttribute("class", "modal");
  h2.innerText = "Contactez moi" + name;
  imgClose.src = "assets/icons/close.svg";
  labelFirstName.innerText = "Prénom";
  inputFirstName.setAttribute("id", "firstName");
  labelName.innerText = "Nom";
  labelEmail.innerText = "Email";
  labelMessage.innerText = "Votre Message";
  contactButton.setAttribute("class", "contact_button");
  contactButton.innerText = "Envoyer";
  inputMessage.setAttribute("class", "input_message");

  // Display modal
  form.setAttribute("id", "form");
  header.appendChild(contactModal);
  contactModal.appendChild(modal);
  modal.appendChild(contactHeader);
  modal.appendChild(form);
  contactHeader.appendChild(h2);
  contactHeader.appendChild(imgClose);
  formContent.appendChild(labelFirstName);
  formContent.appendChild(inputFirstName);
  formContent.appendChild(labelName);
  formContent.appendChild(inputName);
  formContent.appendChild(labelEmail);
  formContent.appendChild(inputEmail);
  formContent.appendChild(labelMessage);
  formContent.appendChild(inputMessage);
  form.appendChild(formContent);
  form.appendChild(contactButton);

  contactModal.style.display = "flex";
  contactModal.style.position = "fixed";
  contactModal.style.width = "auto";
  contactModal.style.left = "45%";
  contactModal.style.top = "20%";
  contactModal.style.margin = "-150px 0 0 -200px";
  modal.style.width = "550px";
  headerLink.style.opacity = "0.5";
  main.style.opacity = "0.5";
  contactModal.style.zIndex = "2";

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    console.log(inputFirstName.value);
    console.log(inputName.value);
    console.log(inputEmail.value);
    console.log(inputMessage.value);
  });
  //   main.appendChild(modal);
  //   modal.style.display = "block";
  imgClose.addEventListener("click", closeModal);
}

function closeModal() {
  const headerLink = document.querySelector(".logo");
  const modal = document.getElementById("contact_modal");

  modal.style.display = "none";
  main.style.opacity = "1";
  headerLink.style.opacity = "1";

  // location.reload();
}

// FORM VALIDATION

// REGEX
const form = document.getElementById("form");
// const contactButton = document.querySelector(".contact_button");
const regExpNames = /^[a-zA-Z]{2,}$/;
const regExpEmail = /^[\w-_\.]+@([\w-]+\.)+[\w-]{2,4}$/;

// form.addEventListener("submit", (e) => {
//   e.preventDefault();
//   const firstName = document.getElementById("firstName");
//   if (!checkFirstName(firstName)) {
//     return;
//   }
// });

function checkFirstName() {
  const firstName = document.getElementById("firstName");

  if (
    firstName.ariaValueMax.match(regExpNames) ||
    firstName.value.trim() === ""
  ) {
    firstName.style.border = "2px solid #FF4E6O";
  } else {
    firstName.style.border = "2 solid #F00";
  }
}
