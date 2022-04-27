import "./css/home-styles.css";
import "./css/mars-styles.css";
import "./css/iss-styles.css";
import "./css/utility-styles.css";
import { ISSTracker } from "./js/iss-tracker.js";
import { BingLocation } from "./js/bing-api.js";
import $ from "jquery";
import { Distance } from "./js/utility.js";
import { PeopleInSpace } from "./js/people.js";
import { RoverPhotos } from "./js/rover-photos.js";
/* eslint-disable */
import { img } from "../assets/images/Machu_Picchu.jpeg";
import { img2 } from "../assets/images/Petra.jpeg";
import { img3 } from "../assets/images/Great_Wall_China.jpeg";
import { img4 } from "../assets/images/Colosseom.jpeg";
import { img5 } from "../assets/images/Christ_Redeemer.jpeg";
import { img6 } from "../assets/images/Taj-Mahal.jpeg";
import { img7 } from "../assets/images/Chichen.jpeg";
/* eslint-enable */

$(window).scroll(function () {
  if ($(window).scrollTop() > 850 && $(window).scrollTop() < 980) {
    $("#iss-interact").removeClass("invisable");
    $("#iss-img").addClass("animate");
    $(".iss-label").addClass("animate-slower");
  }
});

function displayError(element) {
  $(element).text("");
  $(element).append(
    "<p class='error'>There was an error getting this data from api<p>"
  );
}

function displayLandmarks(landmarksArray) {
  const output = $("#landmark-output");
  $(output).removeClass("hidden");
  $(output).children("button").text("Next");
  let index = 1;
  $(output)
    .children("button")
    .on("click", function () {
      $(output).children("img").removeClass("hidden");
      $(output)
        .children("p")
        .text(
          `${landmarksArray[index][1]} is: ${landmarksArray[index][0]} km away from the ISS!`
        );
      $(output).children("img").attr("src", landmarksArray[index][2]);
      index++;
      if (index === 7) {
        index = 1;
      }
    });
}

async function displayPeople() {
  const peopleArray = await PeopleInSpace.getPeopleSpace();
  if (peopleArray !== true) {
    const output = $("#output-people");
    $("#people-title").removeClass("hidden");
    $(output).text("");
    for (let i = 0; i < peopleArray.length; i++) {
      if (peopleArray[i].craft === "ISS") {
        $(output).append(`<li>${peopleArray[i].name}!</li>`);
      }
    }
  } else {
    displayError($("#iss-error-ouput"));
  }
}

function updateGoogleMaps(lat, long) {
  $("#iss-see-title").removeClass("hidden");
  const iframe = $("#google-maps-iframe");
  const src = `https://www.google.com/maps/embed/v1/view?key=${process.env.API_KEY_GOOGLE}
      &center=${lat},${long}
      &maptype=satellite`;
  $(iframe).attr("src", src);
}

$("#object-location").submit(async function (event) {
  event.preventDefault();
  let postalCode = $("#Pc-input").val();
  const userLocation = await BingLocation.getBingLocation(postalCode);
  const location = await ISSTracker.getLocationIss();
  if (location !== true && userLocation !== true) {
    let distance = Distance.getDistanceFromLatLonInKm(
      location[0],
      location[1],
      userLocation[0],
      userLocation[1]
    );
    const landmarksArray = await ISSTracker.getLocationsOfLandmarksFromIss(
      location[0],
      location[1]
    );
    displayLandmarks(landmarksArray);
    displayPeople();
    updateGoogleMaps(location[0], location[1]);
    let displayDistance = (Math.round(distance * 10) / 10).toLocaleString();
    $("#output").text("");
    $("#output").append(
      `<p>You are <span class='accent'>${displayDistance} km</span> away from the ISS!</p>`
    );
  } else {
    displayError($("#iss-error-output"));
  }
});

$("#birthday").submit(async function (event) {
  event.preventDefault();
  const date = $("#date-input").val();
  const month = date.slice(5);
  const newDate = `2021-${month}`;
  $("#mars-photos").show();
  $("#output3").text("");
  let photo = await RoverPhotos.getRoverPhotos(newDate);
  if (photo !== true) {
    $("#output3").append(`<img class='rover-img' src='${photo}'>`);
  } else {
    displayError($("#rover-error-output"));
  }
});
