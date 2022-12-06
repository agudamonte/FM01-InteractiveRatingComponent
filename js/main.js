const rateSelected = document.querySelector(".rates-level-container");
const submit = document.querySelector(".main-view");

const rateView = document.querySelector(".main-view");
const feedbackText = document.querySelector(".rate-submitted");
const feedbackView = document.querySelector("main-submitted");

rateSelected.addEventListener("click", seleccionarPuntaje);
submit.addEventListener("click", submitRate);

let puntaje = "";

function seleccionarPuntaje(e) {
  if (e.target.classList.contains("rate")) {
    e.target.classList.toggle("selected");
    puntaje = e.target.textContent;
  }
  console.log(puntaje);
}

function submitRate(e) {
  if (e.target.classList.contains("submit-button")) {
    rateView.classList.toggle("inactivo");
    feedbackView.classList.toggle("inactivo");

    feedbackText.textContent = `You selected ${puntaje} out of 5`;
  }
}
