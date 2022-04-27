import { ApiCall, ErrorHandling } from "./utility.js";

export class PeopleInSpace {
  static async getPeopleSpace() {
    let url = `http://api.open-notify.org/astros.json`;

    const response = await ApiCall.getApi(url);
    const isError = ErrorHandling.handleError(response);
    if (!isError) {
      const people = response.people;
      const names = people.map(({ craft, name }) => ({ craft, name }));
      return names;
    }
    return true;
  }
}
