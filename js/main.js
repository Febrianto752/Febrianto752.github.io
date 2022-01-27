const [home, about, projects, contacts] = Array.from(
  document.getElementsByClassName("nav-link")
);

window.addEventListener("hashchange", function (event) {
  const activeLink = document.querySelector(".active");
  if (this.location.hash === "") {
    activeLink.classList.remove("active");
    home.classList.add("active");
  }
  if (this.location.hash === "#about") {
    activeLink.classList.remove("active");
    about.classList.add("active");
  }
  if (this.location.hash === "#projects") {
    activeLink.classList.remove("active");
    projects.classList.add("active");
  }
  if (this.location.hash === "#contacts") {
    activeLink.classList.remove("active");
    contacts.classList.add("active");
  }
});

// form feature
const scriptURL =
  "https://script.google.com/macros/s/AKfycbzeErpWKAWvYScQDi6PqZso17Nky-g_SKqNr6U8CP-JZTYIi07iKJCoy0cVv8U0ANdQ/exec";
const form = document.forms["contact-form-me"];
const inputNameElem = document.getElementById("name");
const inputEmailElem = document.getElementById("email");
const inputMessageElem = document.getElementById("message");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const btnLoading = document.querySelector(".btn-loading");
  const btnSend = document.querySelector(".btn-send");
  const alertElem = document.querySelector(".alert");

  btnSend.classList.add("d-none");
  btnLoading.classList.remove("d-none");
  fetch(scriptURL, {
    method: "POST",
    body: new FormData(form),
  })
    .then((response) => {
      console.log("Success!", response);
      btnSend.classList.remove("d-none");
      btnLoading.classList.add("d-none");
      alertElem.classList.remove("d-none");
      resetInputElmentValue(inputNameElem, inputEmailElem, inputMessageElem);
    })
    .catch((error) => {
      console.error("Error!", error.message);
      alertElem.querySelector("p").innerText = "Opps Something Wrong!";
      alertElem.classList.remove("d-none");
    });
});

const resetInputElmentValue = (
  inputNameElem,
  inputEmailElem,
  inputMessageElem
) => {
  inputNameElem.value = "";
  inputEmailElem.value = "";
  inputMessageElem.value = "";
};
