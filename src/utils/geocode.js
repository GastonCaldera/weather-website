'use string'

const request = require('request')

const geocode = (address, callback) => {
    const geocodeUrl = `https://api.mapbox.com/geocoding/v5/mapbox.places/${encodeURIComponent(address)}.json?access_token=pk.eyJ1Ijoic25vb3MiLCJhIjoiY2szMG9oNG5tMDBrNzNobGJ1ZHNpOXN4dCJ9.Z0_80tnWXnsA8HqbDJMLgQ`

    request({ url: geocodeUrl, json: true }, (error, {body}) => {
        if (error) {
            callback('Unable to connect to location service!', undefined)
        } else if (body.features.length === 0) {
            callback('Unable to find to location. Try another search', undefined)
        } else {
            callback(undefined, {
                location: body.features[0].place_name,
                latitude: body.features[0].center[1],
                longitude: body.features[0].center[0]
            })
        }
    })
}

module.exports  = geocode