import $ from "jquery";
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./css/styles.css";
import { ApiCall } from "./utility.js";

async function bingLocation() {
  let address = $('#address-input').val();
  let postalCode = $('#Pc-input').val();
  let url = `http://dev.virtualearth.net/REST/v1/Locations?postalCode=${postalCode}&addressLine=${address}&maxResults=10&key=${process.env.API_KEY_BING}`;

const response = await ApiCall.bingLocation(url);
console.log(response);
}
