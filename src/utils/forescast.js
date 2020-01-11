'use string'

const request = require('request')

const forecast = (latitude, longitude, callback) => {
    const darkSkyUrl = `https://api.darksky.net/forecast/f882c176259f343c69ec5d471bc280f4/${latitude},${longitude}?units=si`
    
    request({ url: darkSkyUrl, json: true }, (error, {body}) => {
        if (error) {
            callback('Unable to connect to Weather Service!', undefined)
        } else if (body.error) {
            callback('Unable to find location', undefined)
        } else {
            callback(undefined,`It is currenly ${body.currently.temperature} degrees out. there is a ${body.currently.precipProbability}% change of rain`)
        }
    })
}

module.exports = forecast