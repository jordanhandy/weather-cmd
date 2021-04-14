// dotenv package for secrets
// chalk for styling
require("dotenv").config();
const chalk = require("chalk");
// request for API calls
const request = require("postman-request");
// define API URLs
// weatherstack
const url = `http://api.weatherstack.com/current?access_key=${process.env.WEATHER_API}&query=New_York`;
request(
  {
    // define URL, and force JSON
    url: url,
    json: true,
  },
  // an error and response comes back
  (error, response) => {
    if (error) {
      chalk.inverse.red(console.log("Unable to connect to weather service"));
    }else if(response.body.error){
      chalk.inverse.red(console.log("Unable to find location"));
    } 
    else {
      const data = response.body;
      console.log(
        "FORECAST: " +
          data.current.weather_descriptions[0] +
          "\nIt is currently " +
          data.current.temperature +
          " degrees outside.\nThere is currently a " +
          data.current.precip +
          " percent chance of rain.\nIt feels like " +
          data.current.feelslike +
          " degrees outside."
      );
    }
  }
);

// Geocoding
// mapbox

const geocode=`https://api.mapbox.com/geocoding/v5/mapbox.places/Los%20Angeles.json?access_token=${process.env.GEOCODE_API}&limit=1`
request({ url: geocode, json:true},(error,response) =>{
  if(error){
    chalk.red.inverse(console.log("Unable to make the request"));
  } else if(response.body.features.length === 0){
    chalk.red.inverse(console.log("Unable to find location"));
  }
  else{

    console.log("GEOCODING\nLAT: "+ response.body.features[0].center[1] + "LON: " + response.body.features[0].center[0]);
  }
})
