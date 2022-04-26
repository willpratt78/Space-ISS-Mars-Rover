import { ApiCall } from "./utility.js";
export class BingLocation {
  static async getBingLocation(address, postalCode) {
    let url = `http://dev.virtualearth.net/REST/v1/Locations?postalCode=${postalCode}&addressLine=${address}&maxResults=10&key=${process.env.API_KEY_BING}`;

    const response1 = await ApiCall.getApi(url);
    let parsedLat = response1.resourceSets[0].resources[0].bbox[0];
    let parsedLon = response1.resourceSets[0].resources[0].bbox[3];
    return [parsedLat, parsedLon];
  }
}