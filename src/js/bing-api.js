import { ApiCall, ErrorHandling } from "./utility.js";
export class BingLocation {
  static async getBingLocation(postalCode) {
    let url = `http://dev.virtualearth.net/REST/v1/Locations?postalCode=${postalCode}&maxResults=10&key=${process.env.API_KEY_BING}`;

    const response1 = await ApiCall.getApi(url);
    const isError = ErrorHandling.handleError(response1);
    if (!isError) {
      let parsedLat = response1.resourceSets[0].resources[0].bbox[0];
      let parsedLon = response1.resourceSets[0].resources[0].bbox[3];
      return [parsedLat, parsedLon];
    } else {
      return true;
    }
  }
}
