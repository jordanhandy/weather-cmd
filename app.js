require ('dotenv').config();
const request = require("postman-request");
const url =
  "http://api.weatherstack.com/current?access_key=process.env.WEATHER_API&query=New_York";
request(
  {
    url: url,
    json: true
  },
  (error, response) => {
      const data = response.body;
      console.log("FORECAST: \nIt is currently " + data.current.temperature + " degrees outside.\nThere is currently a " + data.current.precip + " percent chance of rain.\nIt feels like " + data.current.feelslike + " degrees outside.");
  }
);
