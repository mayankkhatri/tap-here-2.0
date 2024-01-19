// Collapse Checkout Page on Arrow Down Click

const arrowDownBtn = document.querySelector(".arrow-down");
const webinarCheckoutDiv = document.querySelector(".checkout-webinar");

arrowDownBtn.addEventListener("click", function () {
  webinarCheckoutDiv.style.bottom = "-100%";
});

// Show Webinar Checkout page on click
const webinarSection = document.querySelector(".webinar-main");

webinarSection.addEventListener("click", function () {
  webinarCheckoutDiv.style.bottom = "0";
});
