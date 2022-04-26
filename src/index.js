// import 'bootstrap';
// import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import { ISSTracker } from "./js/iss-tracker.js";
// import { BingLocation } from "./js/bing-api.js";
import $ from 'jquery';
import { Distance } from './js/utility.js';
// import { Nasa } from './js/nasa.js'
import {PeopleInSpace} from "./js/people.js";
import {RoverPhotos} from "./js/rover-photos.js";

$(window).scroll(function () {
  if ($(window).scrollTop() > 390 && $(window).scrollTop() < 560) {
    $("#iss-interact").removeClass("invisable");
    $("#iss-img").addClass("animate");
    $(".iss-label").addClass("animate-slower");
  }
});

function displayLandmarks(landmarksArray) {
  const output = $("#landmark-output");
  $("#landmark-output").text("");
  for (let i = 0; i < landmarksArray.length; i++) {
    $(output).append(`<li> ${landmarksArray[i][1]} is: ${landmarksArray[i][0]} km away from the ISS!</li>`);
  }
}

async function displayPeople() {
  const peopleArray = await PeopleInSpace.getPeopleSpace();
  console.log(peopleArray);
  const output = $("#output-people");
  $("#output-people").text("");
  for (let i = 0; i < peopleArray.length; i++) {
    if(peopleArray[i].craft !== "ISS"){
      return "";
    }else
      $(output).append(`<li> Right now ${peopleArray[i].name} is on the ${peopleArray[i].craft} !</li>`);
  }
}

// function displayRoverPhotos() {
//   const output = $("#photo-block");
//   $("#photo-block").text("");
//   for (let i = 0; i < landmarksArray.length; i++) {
//     $(output).append();
//   }


// function updateGoogleMaps(lat, long){
//   const iframe = $("#google-maps-iframe");
//   const src = `https://www.google.com/maps/embed/v1/view?key=${process.env.API_KEY_GOOGLE}
//       &center=${lat},${long}
//       &maptype=satellite`;
//   $(iframe).attr("src", src);
// }

$("#object-location").submit(async function(event) {
  event.preventDefault();
  // let address = $('#address-input').val();
  // let postalCode = $('#Pc-input').val();
  // const userLocation = await BingLocation.getBingLocation(address, postalCode);
  const userLocation = [45.5152, 122.6784];
  const location = await ISSTracker.getLocationIss();
  let distance = Distance.getDistanceFromLatLonInKm(location[0],location[1], userLocation[0], userLocation[1]);
  const landmarksArray = await ISSTracker.getLocationsOfLandmarksFromIss(location[0], location[1]);
  displayLandmarks(landmarksArray);
  displayPeople();
  // updateGoogleMaps(location[0], location[1]);
  let displayDistance = (Math.round(distance * 10)/10).toLocaleString();
  $("#output").text("you are " + displayDistance + " kilometers away from the ISS!");
});

$("#birthday").submit(async function(event) {
  event.preventDefault();
  const photoBlock = $("#photo-block");
  const date = $("#date-input").val();
  const imgUrl = getRoverPhotos.response.photos[index].img_src;
  let today = new Date();
  var dd = String(today.getDate()).padStart(2, "0");
  var mm = String(today.getMonth() + 1).padStart(2, "0"); 
  var yyyy = today.getFullYear();
  today = yyyy + "-" + mm + "-" + dd;
  if (date > today) {
    $("#error-message").text(
      "The date you entered is invalid. Please enter a new date"
    );
  } else {
    $("#error-message").text("");
    const month = date.slice(5);
    const newDate = `2021-${month}`;
    $("#output3").text("");
    let photo = RoverPhotos.getRoverPhotos(newDate);
    console.log(photo);
    $(photoBlock).append(`<img src='${imgUrl}'>`);
  }
});
