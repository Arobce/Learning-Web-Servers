const errorUtils = require("./error-utils");
const requestUtils = require("./request-utils");

const excludeFromDataFields = ["minutely", "hourly", "alerts", "flags"];


const getForecast = ({ latitude, longitude }, getWeatherInfoCallback) => {
    let url = _getWeatherInfoAPILink(latitude, longitude);

    let requestOptions = {
        url,
        json: true
    }

    requestUtils.makeRequestAndGetRequestDataAndError(requestOptions, (error, { body }) => {
        //Error Handling
        let errorMessage = errorUtils.checkErrorForWeatherRequests(error, body);

        getWeatherInfoCallback(body, errorMessage);
    })

}

const printWeatherForecast = ({ daily, currently }) => console.log(getWeatherForecast(daily, currently));

const getWeatherForecast = ({ daily, currently }) => daily.data[0].summary + ' It is currently ' + currently.temperature + ' degress out. There is a ' + currently.precipProbability + '% chance of rain.';


const _getWeatherInfoAPILink = (lat, lng) => {
    let latLngLink = "https://api.darksky.net/forecast/f5a869fdd5d36d6bed5645f2355a1a5c/" + lat + "," + lng + "?units=si";
    return latLngLink + _getExcludeRequestString();
}

const _getExcludeRequestString = () => {
    let requestString = "&exclude=";
    let first = 0;
    excludeFromDataFields.forEach((field) => {
        if (first > 0) {
            requestString += "," + field;
        } else {
            requestString += field;
        }
        first++;
    })

    return requestString;
}

module.exports = { getForecast, printWeatherForecast, getWeatherForecast };