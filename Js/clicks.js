// Flickity
var flkty = new Flickity(".products", {
  wrapAround: true,
  autoPlay: 9000,
});

// Flickity
var flkty = new Flickity(".specs", {
  wrapAround: true,
  autoPlay: 3000,
  pageDots: false,
});

// Flickity
var flkty = new Flickity(".reviews", {
  wrapAround: true,
  prevNextButtons: false,
  pageDots: false,
});

// Flickity
var flkty = new Flickity(".specs-per", {
  wrapAround: true,
  autoPlay: 3000,
  pageDots: false,
});

// Flickity
var flkty = new Flickity(".reviews-personal", {
  wrapAround: true,
  prevNextButtons: false,
  pageDots: false,
});

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

bookNowButton.addEventListener("click", function () {
  setTimeout(function () {
    reviewSignup.innerHTML = `
    <div class="signup-webinar">
    <div class="timing">
    <span
    >Webinar Timing: <span id="webinar-date">6 June</span>/<span
    id="webinar-time"
    >7:30PM</span
    ></span
    >
    </div>
    <form class="webinar-signup-form" action="">
    <input type="text" placeholder="Name" />
    <input type="text" placeholder="Phone" />
    <input style="display: none" type="text" placeholder="creator" value="" />
    <input style="display: none" type="text" placeholder="service" value="" />
    <input style="display: none" type="text" placeholder="price" value="" />
    <input class="webinar-submit" type="submit" value="Register" value=""/>
    </form>
    </div>`;
  }, 300);
});

//? Personal Call
const bookNowButtonPer = document.querySelector(".price-wrap-per");
const reviewSignupPer = document.querySelector(".rem-pers");

bookNowButtonPer.addEventListener("click", function () {
  setTimeout(function () {
    reviewSignupPer.innerHTML = `
    <div class="signup-webinar">
          <form class="personal-signup-form" action="">
            <input type="text" placeholder="Name" />
            <input type="text" placeholder="Phone" />
            <input
              style="display: none"
              type="text"
              placeholder="creator"
              value=""
            />
            <input
              style="display: none"
              type="text"
              placeholder="service"
              value=""
            />
            <input
              style="display: none"
              type="text"
              placeholder="price"
              value=""
            />
            <input
              class="webinar-submit"
              type="submit"
              value="Register"
              value=""
            />
          </form>
        </div>`;
  }, 300);
});
