// Get the current URL

var urlString = window.location.href;
// Use a regular expression to extract the page name after the last '/'
var match = urlString.match(/\/([^\/]+)\.html/);

// Get the current URL
var currentUrl = window.location.href;

// Split the URL by "/" to get an array of parts
var urlParts = currentUrl.split("/");

// Get the last part of the URL, which should be the page name
var pageName = urlParts[urlParts.length - 1];

// Check if there is a match and extract the page name
var slug = match ? match[1] : pageName;

// Now, 'pageName' contains the page name
console.log(slug);

// Replace 'YOUR_GRAPHCMS_ENDPOINT' with your actual endpoint
const graphCMSEndpoint =
  "https://api-ap-south-1.hygraph.com/v2/clnjzxrv04p6n01uo1c9d7759/master";

// query
const graphqlQuery = `
  query {
    page(where: { slug: "${slug}" }) {
      name
      photoLink
      creatorAbout
      rating
      peopleHelped
      contentCategory
      mainWebinarPhoto
      instaLink
      snapLink
      youtubeLink
      twitterLink
      latestYoutubeLink  
      webinarImages
      webinarDescription
      webinarPrice
      webinarReviews
      personalImagesHtml
      personalDescriptionHtml
      personalPrice
      personalReviewsHtml
      productsHtml
      lowerDescription
      extraLinkHtml

    }
  }
`;

// Make a POST request to the GraphCMS API
fetch(graphCMSEndpoint, {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify({ query: graphqlQuery }),
})
  .then((response) => response.json())
  .then((data) => {
    // Access the single post data using data.post
    const pageData = data.data.page;
    //todo  Etrapolate Data
    const name = pageData.name;
    const photoLink = pageData.photoLink;
    const creatorAbout = pageData.creatorAbout;
    const ratingNum = pageData.rating;
    const numHelp = pageData.peopleHelped;
    const contentCategory = pageData.contentCategory;
    const instaLink = pageData.instaLink;
    const snapLink = pageData.snapLink;
    const youtubeLink = pageData.youtubeLink;
    const twitterLink = pageData.twitterLink;
    const latestYoutubeLink = pageData.latestYoutubeLink;
    const webinarImages = pageData.webinarImages;
    const webinarDescription = pageData.webinarDescription;
    const webinarReviews = pageData.webinarReviews;
    const webinarPrice = pageData.webinarPrice;
    const personalImages = pageData.personalImagesHtml;
    const personalDescription = pageData.personalDescriptionHtml;
    const persReviews = pageData.personalReviewsHtml;
    const webinarImageLink = pageData.mainWebinarPhoto;
    const personalPrice = pageData.personalPrice;
    const productsHtml = pageData.productsHtml;
    const belowDescription = pageData.lowerDescription;
    const extralinkhtml = pageData.extraLinkHtml;

    //todo Update page with the data
    const crname = document.getElementById("creatorName");
    crname.textContent = name;
    const crdp = document.getElementById("dp-img");
    crdp.src = photoLink;
    const crdpsec = document.getElementById("dp-sec");
    crdpsec.src = photoLink;
    const crabout = document.getElementById("creatorAbout");
    crabout.innerText = creatorAbout;
    const crrating = document.getElementById("rating-num");
    crrating.innerText = ratingNum;
    const crhelped = document.getElementById("num-helped");
    crhelped.innerText = numHelp;
    const crcategory = document.getElementById("creator-category");
    crcategory.innerText = contentCategory;
    const crinsta = document.getElementById("insta");
    crinsta.href = instaLink;
    const crtwitter = document.getElementById("twitter");
    crtwitter.href = twitterLink;
    const crsnap = document.getElementById("snap");
    crsnap.href = snapLink;
    const cryoutube = document.getElementById("youtube");
    cryoutube.href = youtubeLink;
    const crytvid = document.getElementById("latest-yt");
    crytvid.src = latestYoutubeLink;
    const webinarSpec = document.getElementById("web-specs");
    webinarSpec.innerHTML = webinarImages;
    const webinarImage = document.getElementById("webinar-image");
    webinarImage.src = webinarImageLink;
    const extralinkSec = document.getElementById("extra-link");
    extralinkSec.innerHTML = extralinkhtml;
    // ?
    // Flickity
    var flkty = new Flickity(".specs", {
      wrapAround: true,
      pageDots: false,
    });
    // ?
    const webinarDesc = document.getElementById("web-desc");
    webinarDesc.innerHTML = webinarDescription;
    const webReview = document.getElementById("web-review");
    webReview.innerHTML = webinarReviews;
    // ?
    // Flickity
    var flkty = new Flickity(".reviews", {
      wrapAround: true,
      prevNextButtons: false,
      pageDots: false,
    });
    // ?
    const webiPrice = document.getElementById("webinar-price");
    webiPrice.innerText = webinarPrice;
    //
    const perSpecs = document.getElementById("per-specs");
    perSpecs.innerHTML = personalImages;
    // Flickity
    var flkty = new Flickity(".specs-per", {
      wrapAround: true,
      pageDots: false,
    });
    // ?
    const persDesc = document.getElementById("pers-desc");
    persDesc.innerHTML = personalDescription;
    const persReview = document.getElementById("pers-review");
    persReview.innerHTML = persReviews;
    // Flickity
    var flkty = new Flickity(".reviews-personal", {
      wrapAround: true,
      prevNextButtons: false,
      pageDots: false,
    });
    // ?
    const persPrice = document.getElementById("personal-price");
    persPrice.innerText = personalPrice;
    const prodContainer = document.getElementById("products");
    prodContainer.innerHTML = productsHtml;
    // Flickity
    var flkty = new Flickity(".products", {
      wrapAround: true,
      autoPlay: 9000,
    });
    //?
    const lowDesc = document.getElementById("lower-desc");
    lowDesc.innerText = belowDescription;

    //todo Form value Addition
    // Cretor Data
    const crtrName = document.getElementById("creatorName").innerText;
    const webPrice = document.getElementById("webinar-price").innerText;
    const perPrice = document.getElementById("personal-price").innerText;

    // Creator data to customer form
    document.getElementById("web-cr-nm").value = crtrName;
    document.getElementById("per-cr-nm").value = crtrName;
    document.getElementById("dm-cr-nm").value = crtrName;
    document.getElementById("web-prc").value = webPrice;
    document.getElementById("per-prc").value = perPrice;
  })
  .catch((error) => console.error("Error:", error));
