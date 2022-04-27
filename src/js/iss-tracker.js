import { ApiCall, Distance, ErrorHandling } from "./utility.js";

export class ISSTracker {
  static async getLocationIss() {
    const response = await ApiCall.getApi(
      "https://api.wheretheiss.at/v1/satellites/25544"
    );
    const isError = ErrorHandling.handleError(response);
    if (!isError) {
      let latitude = response.latitude;
      let longitude = response.longitude;
      return [latitude, longitude];
    }
    return true;
  }
  static async getLocationsOfLandmarksFromIss(issLat, issLong) {
    let landmarkDistanceArray = [];
    let locationsArray = [
      [41.8902, 12.4922, "The Colosseum", "/assets/images/Colosseom.jpeg"],
      [
        20.6843,
        88.5678,
        "Chichén Itzá El Castillo",
        "assets/images/Chichen.jpeg",
      ],
      [13.1631, 72.545, "Machu Picchu", "../assets/images/Machu_Picchu.jpeg"],
      [
        22.9519,
        43.2105,
        "Christ the Reedemer",
        "./assets/images/Christ_Redeemer.jpeg",
      ],
      [30.3285, 35.4444, "Petra", "./assets/images/Petra.jpeg"],
      [
        40.4319,
        116.5704,
        "The Great Wall of China",
        "./assets/images/Great_Wall_China.jpeg",
      ],
      [27.1751, 78.0421, "The Taj Mahal", "./assets/images/Taj-Mahal.jpeg"],
    ];
    for (let i = 0; i < locationsArray.length; i++) {
      const distance = Distance.getDistanceFromLatLonInKm(
        locationsArray[i][0],
        locationsArray[i][1],
        issLat,
        issLong
      );
      const displayDistance = Math.round((distance * 10) / 10).toLocaleString();
      const array = [
        displayDistance,
        locationsArray[i][2],
        locationsArray[i][3],
      ];
      landmarkDistanceArray.push(array);
    }
    return landmarkDistanceArray;
  }
}
