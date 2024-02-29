// Form date submit
let formWeb = document.querySelector(".webinar-signup-form");
formWeb.addEventListener("submit", (e) => {
  e.preventDefault();
  let data = new FormData(formWeb);
  fetch(
    "https://script.google.com/macros/s/AKfycbwUiVDScCEvwMzOea1l89-qZ5L1WAlryvFGiaymV95njRLo-kN_zP8ihr1opIFSuEgLMQ/exec",
    {
      method: "POST",
      body: data,
    }
  )
    .then((res) => res.text())
    .then((data) => {
      webinarCheckoutDiv.style.bottom = "-200%";
      document.querySelector(".submit-card").style.display = "grid";
      console.log("submit");
    });
});

// Form date submit
let formper = document.querySelector(".personal-signup-form");
formper.addEventListener("submit", (e) => {
  e.preventDefault();
  let data = new FormData(formper);
  fetch(
    "https://script.google.com/macros/s/AKfycbwUiVDScCEvwMzOea1l89-qZ5L1WAlryvFGiaymV95njRLo-kN_zP8ihr1opIFSuEgLMQ/exec",
    {
      method: "POST",
      body: data,
    }
  )
    .then((res) => res.text())
    .then((data) => {
      webinarCheckoutDivPer.style.bottom = "-200%";
      document.querySelector(".submit-card").style.display = "grid";
      console.log("submit");
    });
});

// Form date submit
let formdm = document.querySelector(".dm-form");
formdm.addEventListener("submit", (e) => {
  e.preventDefault();
  let data = new FormData(formdm);
  fetch(
    "https://script.google.com/macros/s/AKfycbwUiVDScCEvwMzOea1l89-qZ5L1WAlryvFGiaymV95njRLo-kN_zP8ihr1opIFSuEgLMQ/exec",
    {
      method: "POST",
      body: data,
    }
  )
    .then((res) => res.text())
    .then((data) => {
      webinarCheckoutDivDm.style.bottom = "-200%";
      document.querySelector(".submit-card").style.display = "grid";
      console.log("submit");
    });
});
