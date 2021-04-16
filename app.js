// dotenv package for secrets
// chalk for styling
require("dotenv").config();
const chalk = require("chalk");
// request for API calls
const geocode = require("./utils/geocode");
const forecast = require("./utils/forecast");

// Callback chaining
// use the output of 'data' as input to the second callback function (forecast)
geocode("boston",(error,data) => {
  console.log("Error",error);
  console.log("Data",data);
  forecast(data.latitude,data.longitude,(error, data) => {
    console.log("Error",error);
    console.log('Data',data);
  })
})