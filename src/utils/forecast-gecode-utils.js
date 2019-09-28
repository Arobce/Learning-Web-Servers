
const forecast = require("./forecast");
const geocode = require("./geocode");
const chalkUtils = require("./chalk-uitls");


const _printWeatherForecastWithLocation= (geocodeData,forecastData) => geocode.printCurrentLocation(geocodeData) + forecast.printWeatherForecast(forecastData);

const getGeocodeAndPrintWeatherInfo = address => {
    geocode.getGeocode(address, (geocodeData, errorMessage) => {

        if (errorMessage) { return chalkUtils.printErrorMessage(errorMessage) };
        
        forecast.getForecast(geocodeData, (forecastData, error) => {
            
            if (errorMessage) { return chalkUtils.printErrorMessage(errorMessage) };
            
            _printWeatherForecastWithLocation(geocodeData,forecastData);
        })
    });
}

module.exports = {getGeocodeAndPrintWeatherInfo}