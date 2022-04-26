import { ApiCall, Distance } from "./utility.js";

export class ISSTracker {
  static async getLocationIss() {
    const response = await ApiCall.getApi('https://api.wheretheiss.at/v1/satellites/25544');
    let latitude = response.latitude;
    let longitude = response.longitude;
    return [latitude, longitude];
  }
  static async getLocationsOfLandmarksFromIss(issLat, issLong) {
    let landmarkDistanceArray = [];
    let locationsArray = [[41.8902, 12.4922, "The Colosseum"],[20.6843, 88.5678, "Chichén Itzá El Castillo"],[13.1631, 72.5450, "Machu Picchu"],[22.9519, 43.2105, "Christ the Reedemer"],[30.3285, 35.4444, "Petra"],[40.4319, 116.5704, "The Great Wall of China"],[27.1751, 78.0421, "The Taj Mahal"]];
    for (let i = 0; i < locationsArray.length; i++) {
      const distance = Distance.getDistanceFromLatLonInKm(locationsArray[i][0],locationsArray[i][1], issLat, issLong);
      const displayDistance = Math.round((distance * 10)/10).toLocaleString();
      const array = [displayDistance, locationsArray[i][2]];
      landmarkDistanceArray.push(array);
    }
    return landmarkDistanceArray;
  }
}

