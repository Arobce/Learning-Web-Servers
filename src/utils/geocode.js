const errorUtils = require("./error-utils");
const requestUtils = require("./request-utils");


const getGeocode = (address, geoCodeCallback) => {
    const url = _getGeocodeApiLink(address);
    const requestOptions = {
        url: url,
        json: true
    }

    requestUtils.makeRequestAndGetRequestDataAndError(requestOptions, (error, { body }) => {

        let data = {
            latitude: 0,
            longitude: 0,
            location: 0
        };
        //Error Handling
        let errorMessage = errorUtils.checkErrorForGeocodingRequests(error, body);

        if (!errorMessage) {
            let { features } = body;
            let latitude = features[0].center[1];
            let longitude = features[0].center[0];
            let location = features[0].place_name;

            data = {
                latitude,
                longitude,
                location
            };
        }

        geoCodeCallback(data, errorMessage);

    })
}

const printCurrentLocation = ({ location }) => console.log(location);

const getCurrentLocation = ({ location }) => location;

const _getGeocodeApiLink = (address) => "https://api.mapbox.com/geocoding/v5/mapbox.places/" + encodeURIComponent(address) + ".json?access_token=pk.eyJ1IjoiYXJvYmNlIiwiYSI6ImNqeDhqZXIwbjBsczEzcnF1cjNma3VhNHcifQ.IqytwuTwvYV1ftFptax9dA&limit=1";

module.exports = { getGeocode, printCurrentLocation, getCurrentLocation };