const request = require("postman-request");
const forecast = (lat,lon,callback) => {
    const url = `http://api.weatherstack.com/current?access_key=${process.env.WEATHER_API}&query=`+encodeURI(lat)+","+encodeURI(lon);
    request({url:url,json:true},(error,response) => {
      if(error){
        callback("Unable to connect to service",undefined);
      }else if(response.body.error){
        callback("Unable to find location.  Please try again.",undefined);
      } else{
        callback(undefined,{
          temp:response.body.current.temperature,
          precip:response.body.current.precip,
          feelslike:response.body.current.feelslike
        })
      }
    })
  }
  module.exports = forecast;