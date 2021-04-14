const request = require("postman-request");

const geocode = (address, callback) => {
    const url = `https://api.mapbox.com/geocoding/v5/mapbox.places/`+encodeURI(address)+`.json?access_token=${process.env.GEOCODE_API}&limit=1`
    request({url:url, json:true},(error,response) =>{
      if(error){
        callback('Unable to connect to location services',undefined);
      }else if(response.body.features.length===0){
        callback("Unable to find the location.  Try another search",undefined);
      } else{
        callback(undefined,{
          latitude: response.body.features[0].center[1],
          longitude: response.body.features[0].center[0],
          placeName: response.body.features[0].place_name
        })
      }
    })
  }
  module.exports = geocode