import { ApiCall } from "./utility.js";

export class PeopleInSpace {
  static async getPeopleSpace() {
    let url = `http://api.open-notify.org/astros.json`;

    const response = await ApiCall.getApi(url);
    const people = response.people;
    const names = people.map(({craft,name}) => ({craft,name}));

    console.log(names);
    return names; 
  }
}







// Kayla Barron - flight engineer
// https://en.wikipedia.org/wiki/Kayla_Barron

// https://en.wikipedia.org/wiki/Matthias_Maurer
// Matthias Maurer- flight engineer

// https://en.wikipedia.org/wiki/Thomas_Marshburn
// Thomas Marshburn- flight engineer

// https://en.wikipedia.org/wiki/Raja_Chari
// Raja Chari - flight engineer

// https://en.wikipedia.org/wiki/Oleg_Artemyev
// Oleg Artemyev - flight engineer

// https://en.wikipedia.org/wiki/Denis_Matveev
// Denis Matveev - flight engineer

// https://en.wikipedia.org/wiki/Ye_Guangfu
// Ye Guangfu - flight engineer

// https://en.wikipedia.org/wiki/Zhai_Zhigang
// Zhai Zhigang - Commander

