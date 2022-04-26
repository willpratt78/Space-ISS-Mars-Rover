import { ApiCall } from "./utility.js";

export class RoverPhotos{
  static async getRoverPhotos(date) {
    const url = `https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?earth_date=${date}&api_key=${process.env.API_KEY_NASA}`;
    const response = await ApiCall.getApi(url);
    return response;
    const imgUrl = response.photos[index].img_src;
  }
}
