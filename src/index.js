import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import { ISSTracker } from "./iss-tracker.js";
// import { BingLocation } from "./bing-api.js";
import $ from 'jquery';
import { Distance } from './utility';
function displayLandmarks(landmarksArray) {
  const output = $("#landmark-output");
  for (let i = 0; i < landmarksArray.length; i++) {
    $(output).append(`<li>Landmark: ${landmarksArray[i][1]} Distance from ISS: ${landmarksArray[i][0]}km </li>`);
  }
}
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
  // updateGoogleMaps(location[0], location[1]);
  let displayDistance = (Math.round(distance * 10)/10).toLocaleString();
  $("#output").text("you are " + displayDistance + " kilometers away from the ISS");
});

// $("#wonders").submit(async function(event) {
//   event.preventDefault();

//   for (let index = 0; index < landmarksArray.length; index++) {
//     const element = array[index];
//   }   
