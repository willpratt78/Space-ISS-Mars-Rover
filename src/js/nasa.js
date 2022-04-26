import { ApiCall } from "./utility.js";

export class Nasa {
  static async getPhotoOfTheDay() {
    const url = `https://api.nasa.gov/planetary/apod?api_key=${process.env.API_KEY_NASA}&thumbs=true`
    const response = await ApiCall.getApi(url);
    return response;
  }
}