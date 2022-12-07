const ratingState = document.querySelector("#first-section");
const thankYouState = document.querySelector("#second-section");
const rates = document.querySelector("#rates");
const rateSelected = document.querySelector("#rate-selected");
const submitBtn = document.querySelector("#btn-submit");

rates.addEventListener("click", select);
submitBtn.addEventListener("click", submit);

let rate = "";

function select(event) {
  if (event.target.classList.contains("btn-rate")) {
    remove();
    rate = event.target.textContent;
    event.target.classList.add("btn-selected");
    cleanAlert();
  }
}

function submit(e) {
  if (rate !== "") {
    ratingState.classList.toggle("inactive");
    thankYouState.classList.toggle("inactive");
    //
    rateSelected.textContent = rate;
    return;
  }
  errorMessage(e.target.parentElement);
}

function remove() {
  let selected = document.querySelector(".btn-selected");
  if (selected) {
    selected.classList.remove("btn-selected");
  }
}

function errorMessage(reference) {
  cleanAlert();
  const alertMessage = document.createElement("p");
  alertMessage.classList.add("error");
  alertMessage.textContent = "Please rate us before submission";
  reference.append(alertMessage);
}

function cleanAlert() {
  alert = document.querySelector(".error");
  if (alert) {
    alert.remove();
  }
}
