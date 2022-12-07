const rateSelected = document.querySelector(".rates-level-container");
const submit = document.querySelector(".main-view");
const rateView = document.querySelector(".main-view");

rateSelected.addEventListener("click", seleccionarPuntaje);
submit.addEventListener("click", submitRate);

let puntaje = "";

function seleccionarPuntaje(e) {
  let selected = document.querySelector(".selected");
  if (selected) {
    selected.classList.remove("selected");
  }
  if (e.target.classList.contains("rate")) {
    e.target.classList.toggle("selected");
    puntaje = e.target.textContent;
  }
  console.log(puntaje);
}

function submitRate(e) {
  e.preventDefault();
  if (e.target.classList.contains("submit-button")) {
    // rateView.classList.toggle("inactivo");
    rateView.innerHTML = `
    <section class="main main-container main-view">
    <figure class="submit-img"></figure>
    <div class="rate-submitted"> You selected ${puntaje} out of 5!</div>
    <h1>Thank You!</h1>
    <p class="main-p">
      We appreciate you taking the time to give a rating. If you ever need
      more support, don't hesitate to get in touch!
    </p>
  </section>
    `;
  }
}
