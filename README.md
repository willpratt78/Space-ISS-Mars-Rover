# Where is the ISS in relation to you

#### Application will tell you where you are in relation to the ISS

#### By Will Pratt, Brady Diamond, James Fox, Evgeniya Meshuris, Evgeny Zbirun

## Technologies Used

- babel
- eslint
- Webpack
- JavaScript
- Node

## APIs Used

- [Bing maps API](https://www.bingmapsportal.com/?_gl=1*87qaxg*_gcl_aw*R0NMLjE2NTEwODIwMzQuQ2owS0NRancwNk9UQmhDX0FSSXNBQVUxeU9VRVlzSlh0ZklBbzRVckJmdTBiNEM3V2NxR0h4VlNhNlVPTXcwZW5mWWxRWUJYYzN1UWFjOGFBdGQzRUFMd193Y0I.)
- [NASA API](https://api.nasa.gov/)
- [People in Space right now API](http://api.open-notify.org/)
- [Google Maps Embed API](https://developers.google.com/maps/documentation/embed/map-generator#api-key)
- [Where is the ISS at? API](https://wheretheiss.at/w/developer)

## Description

This application will tell you how far the ISS is from you, the 7 wonders of the world, what people are currently on the ISS, a photo taken by the mars rover on your last birthhday, and some general information about both the ISS and the Mars rover.

## Setup/Installation Requirements

- Navigate to console on computer and clone template where you want it on your machine using "git clone _webaddress_

```
git clone https://github.com/willpratt78/Space-ISS-Mars-Rover
```

- CD into cloned project.

```
cd Space-Tracker
```

- Create a .env file that has the following API Keys:

```
touch .env
```

- Go to [Bing maps API key](https://www.bingmapsportal.com/?_gl=1*87qaxg*_gcl_aw*R0NMLjE2NTEwODIwMzQuQ2owS0NRancwNk9UQmhDX0FSSXNBQVUxeU9VRVlzSlh0ZklBbzRVckJmdTBiNEM3V2NxR0h4VlNhNlVPTXcwZW5mWWxRWUJYYzN1UWFjOGFBdGQzRUFMd193Y0I.) and follow thir instructions to get an API key, then in the .env file create API_KEY_BING=[API KEY]
- Go to [NASA API KEY](https://api.nasa.gov/), scroll to Generate API Key, and fill out the form, then in the .env file create API_KEY_NASA=[API KEY]
- Go to [Google Maps Embed API KEY](https://developers.google.com/maps/documentation/embed/map-generator#api-key), follow their instructions to generate an API key then in the .env file create API_KEY_GOOGLE=[API KEY]

```
API_KEY_NASA=YOUR_KEY_HERE
API_KEY_BING=YOUR_KEY_HERE
API_KEY_GOOGLE=YOUR_KEY_HERE
```

- open terminal in VSC and run "npm install"

```
npm install
```

- In VSC terminal run "npm run build"

```
npm run build
```

- In VSC terminal run "npm run start"

```
npm run start
```

## Known Bugs

- _No known bugs at this time_

## License

[MIT](https://opensource.org/licenses/MIT)

Copyright (c) _4/27/2022_ _William Pratt, James Fox, Evgeniya Meshuris, Evgeny Zbirun, Brady Diamond_
