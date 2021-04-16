const request = require("postman-request");
const forecast = (lat,lon,callback) => {
    const url = `http://api.weatherstack.com/current?access_key=${process.env.WEATHER_API}&query=`+lat+","+lon;
    request({url:url,json:true},(error,response) => {
      if(error){
        callback("Unable to connect to service",undefined);
      }else if(response.body.error){
        callback("Unable to find location.  Please try again.",undefined);
      } else{
        callback(undefined,"FORECAST: " +
                      response.body.current.weather_descriptions[0] +
                      "\nIt is currently " +
                      response.body.current.temperature +
                      " degrees outside.\nThere is currently a " +
                      response.body.current.precip +
                      " percent chance of rain.\nIt feels like " +
                      response.body.current.feelslike +
                      " degrees outside."
        )
      }
    })
  }
  module.exports = forecast;