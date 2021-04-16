const request = require("postman-request");
const forecast = (lat,lon,callback) => {
    const url = `http://api.weatherstack.com/current?access_key=${process.env.WEATHER_API}&query=`+lat+","+lon;
    request({url,json:true},(error,{body}) => {
      if(error){
        callback("Unable to connect to service",undefined);
      }else if(body.error){
        callback("Unable to find location.  Please try again.",undefined);
      } else{
        callback(undefined,"FORECAST: " +
                      body.current.weather_descriptions[0] +
                      "\nIt is currently " +
                      body.current.temperature +
                      " degrees outside.\nThere is currently a " +
                      body.current.precip +
                      " percent chance of rain.\nIt feels like " +
                      body.current.feelslike +
                      " degrees outside."
        )
      }
    })
  }
  module.exports = forecast;