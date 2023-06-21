const buttons = document.querySelector(".buttons");
const carousel = document.querySelector(".carousel");
const about = document.querySelector("#about");
const services = document.querySelector("#services");
const packets = document.querySelector("#packet");
const company = document.querySelector("#company");
const why = document.querySelector("#why");
const contact = document.querySelector("#contact");
const stickyElements = document.querySelector(".sticky-elements");
const footer = document.querySelector(".footer");
const header_mobile = document.querySelector(".header-mobile");

function myFunction(x) {
  x.classList.toggle("change");
  buttons.classList.toggle("display-none");
  carousel.classList.toggle("display-none");
  about.classList.toggle("display-none");
  services.classList.toggle("display-none");
  packets.classList.toggle("display-none");
  company.classList.toggle("display-none");
  why.classList.toggle("display-none");
  contact.classList.toggle("display-none");
  stickyElements.classList.toggle("display-none");
  footer.classList.toggle("display-none");
  header_mobile.classList.toggle("display");
}

const languageDiv = document.querySelector(".languages");
const languageButtons = document.querySelectorAll("button.language");
function clearLanguageButtonStyle() {
  languageButtons.forEach((b) => {
    b.classList.remove("selected");
  });
}
languageDiv.addEventListener("click", function (e) {
  if (e.target.tagName === "BUTTON") {
    clearLanguageButtonStyle();
    const button = e.target;
    button.classList.add("selected");
  }
});

const buttonPerson = document.getElementById("person");
const corperative = document.getElementById("corperative");
const companyInput = document.getElementById("company_input");

function toogleClass(e) {
  companyInput.classList.toggle("display-none");
  buttonPerson.classList.remove("selected");
  corperative.classList.remove("selected");
  e.target.classList.add("selected");
}

buttonPerson.addEventListener("click", toogleClass);
corperative.addEventListener("click", toogleClass);

if (navigator.userAgent.match(/Mobile/)) {
  document.querySelector(".send").innerHTML = "Təsdiqlə";
}
