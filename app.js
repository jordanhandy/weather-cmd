// dotenv package for secrets
// chalk for styling
require("dotenv").config();
const chalk = require("chalk");
// request for API calls
const geocode = require("./utils/geocode");
const forecast = require("./utils/forecast");

// Callback chaining
// use the output of 'data' as input to the second callback function (forecast)
geocode(process.argv[2],(error,data) => {
  if(process.argv[2]===undefined){
    return console.log(chalk.inverse.red("ERROR. NO ADDRESS PROVIDED"));
  }
  if(error){
    return console.log(error);
  }
  forecast(data.latitude,data.longitude,(error, forecastData) => {
    if (error){
      return console.log(error);
    }
    console.log(chalk.inverse.blue(data.placeName));
    console.log(forecastData);
  })
})