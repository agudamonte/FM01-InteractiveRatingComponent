const ratingState = document.querySelector("#first-section");
const thankYouState = document.querySelector("#second-section");
const rates = document.querySelector("#rates");
const rateSelected = document.querySelector("#rate-selected");
const submitBtn = document.querySelector("#btn-submit");

rates.addEventListener("click", selectPuntuation);
submitBtn.addEventListener("click", submit);

let rate = false;

function selectPuntuation(event) {
    if (event.target.classList.contains("btn-rate")) {
        rate = event.target.value;
        cleanAlert();
    }
}
function submit(e) {
    if (rate) {
        ratingState.classList.toggle("inactive");
        thankYouState.classList.toggle("inactive");
        //
        rateSelected.textContent = rate;
        rates.reset();
        return;
    }
    printErrorMessage();
}

function printErrorMessage() {
    cleanAlert();
    let alertMessage = document.createElement("div");
    alertMessage.classList.add("error");
    alertMessage.textContent = "Please rate us before submission";
    document.querySelector("#first-section").appendChild(alertMessage);

    setTimeout(() => {
        alertMessage.remove();
    }, 2000);
}
function cleanAlert() {
    alert = document.querySelector(".error");
    if (alert) {
        alert.remove();
    }
}
