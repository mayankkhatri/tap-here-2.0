// Get slug
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
      instaLink
      snapLink
      youtubeLink
      twitterLink
      latestYoutubeLink

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
    // Etrapolate Data
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
    // Update page with the data
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
  })
  .catch((error) => console.error("Error:", error));

// Flickity
var flkty = new Flickity(".products", {
  wrapAround: true,
  autoPlay: 9000,
});

// Flickity
var flkty = new Flickity(".specs", {
  wrapAround: true,
  autoPlay: 4000,
  pageDots: false,
});

// Flickity
var flkty = new Flickity(".reviews", {
  wrapAround: true,
  prevNextButtons: false,
  pageDots: false,
});
