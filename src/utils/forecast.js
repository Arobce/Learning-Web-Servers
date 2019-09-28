const errorUtils = require("./error-utils");
const requestUtils = require("./request-utils");


const getForecast = ({latitude,longitude}, getWeatherInfoCallback) => {
    let url = _getWeatherInfoAPILink(latitude,longitude);

    let requestOptions = {
        url,
        json: true
    }

    requestUtils.makeRequestAndGetRequestDataAndError(requestOptions, (error, {body}) => {
        //Error Handling
        let errorMessage = errorUtils.checkErrorForWeatherRequests(error, body);

        getWeatherInfoCallback(body, errorMessage);
    })

}

const printWeatherForecast = ({daily,currently}) => console.log(daily.data[0].summary + ' It is currently ' + currently.temperature + ' degress out. There is a ' + currently.precipProbability + '% chance of rain.');


const _getWeatherInfoAPILink = (lat,lng) => "https://api.darksky.net/forecast/f5a869fdd5d36d6bed5645f2355a1a5c/" + lat + "," + lng + "?units=si"

module.exports = { getForecast, printWeatherForecast };