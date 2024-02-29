// Collapse Checkout Page on Arrow Down Click
// Webinar checkout tab
const arrowDownBtn = document.querySelector(".arrow-down");
const webinarCheckoutDiv = document.querySelector(".checkout-webinar");
// Personal Checkout tab
const arrowDownBtnPer = document.querySelector(".arrow-down-per");
const webinarCheckoutDivPer = document.querySelector(".checkout-personal");
// Dm Collapse
const arrowDownBtndm = document.querySelector(".arrow-down-dm");
const webinarCheckoutDivDm = document.querySelector(".dm-checkout");

// Webinar down
arrowDownBtn.addEventListener("click", function () {
  webinarCheckoutDiv.style.bottom = "-200%";
});

// personal call down
arrowDownBtnPer.addEventListener("click", function () {
  webinarCheckoutDivPer.style.bottom = "-200%";
});

// DM Down
arrowDownBtndm.addEventListener("click", function () {
  webinarCheckoutDivDm.style.bottom = "-200%";
});

// Show Webinar Checkout page on click
const webinarSection = document.querySelector(".webinar-main");

webinarSection.addEventListener("click", function () {
  webinarCheckoutDiv.style.bottom = "0";
});

// Show Personal Call Checkout on click
const personalSection = document.querySelector(".personal-consult");
const personalSectionBottom = document.querySelector(".bottom-callout");

personalSection.addEventListener("click", function () {
  webinarCheckoutDivPer.style.bottom = "0";
});

personalSectionBottom.addEventListener("click", function () {
  webinarCheckoutDivPer.style.bottom = "0";
});

// Show Webinar Checkout page on click
const DmSection = document.querySelector(".dm-box");
const askMe = document.querySelector(".ask-me");

DmSection.addEventListener("click", function () {
  webinarCheckoutDivDm.style.bottom = "0";
});

askMe.addEventListener("click", function () {
  webinarCheckoutDivDm.style.bottom = "0";
});

//! Book to Sign UP

//? Webinar
const bookNowButton = document.querySelector(".price-wrap");
const reviewSignup = document.querySelector(".remove-signup");
const webinarSignup = document.querySelector(".signup-webinar");

bookNowButton.addEventListener("click", function () {
  setTimeout(function () {
    reviewSignup.style.display = "none";
    webinarSignup.style.display = "block";
  }, 300);
});

//? Personal Call
const bookNowButtonPer = document.querySelector(".price-wrap-per");
const reviewSignupPer = document.querySelector(".rem-pers");
const personalSignup = document.querySelector(".signup-personal");

bookNowButtonPer.addEventListener("click", function () {
  setTimeout(function () {
    reviewSignupPer.style.display = "none";
    personalSignup.style.display = "block";
  }, 300);
});

// Submit to slide and cross!
const submitWeb = document.querySelector(".webinar-submit");
const submitPersonal = document.querySelector(".personal-submit");
const submitDM = document.querySelector(".submit-dm");

submitWeb.addEventListener("click", function () {
  setTimeout(function () {
    webinarCheckoutDivPer.style.bottom = "-300vh";
    document.querySelector(".submit-card").style.display = "grid";
  }, 500);
});
submitPersonal.addEventListener("click", function () {
  setTimeout(function () {
    webinarCheckoutDivPer.style.bottom = "-300vh";
    document.querySelector(".submit-card").style.display = "grid";
  }, 500);
});
submitDM.addEventListener("click", function () {
  setTimeout(function () {
    webinarCheckoutDivPer.style.bottom = "-300vh";
    document.querySelector(".submit-card").style.display = "grid";
  }, 500);
});

// Booked successfully cross
const submitCross = document.querySelector(".cross");

submitCross.addEventListener("click", function () {
  document.querySelector(".submit-card").style.display = "none";
});
