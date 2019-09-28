
const forecast = require("./forecast");
const geocode = require("./geocode");
const chalkUtils = require("./chalk-uitls");


const _printWeatherForecastWithLocation = (geocodeData, forecastData) => geocode.printCurrentLocation(geocodeData) + forecast.printWeatherForecast(forecastData);

const _getWeatherForecastWithLocationObject = (geocodeData, forecastData) => {
    let weatherLocationObj = { 
        location: geocode.getCurrentLocation(geocodeData), 
        forecast: forecast.getWeatherForecast(forecastData) 
    }
    return weatherLocationObj;
};

const _getWeatherForecast = (forecastData) => forecast.getWeatherForecast(forecastData);

const getGeocodeAndPrintWeatherInfo = address => {
    geocode.getGeocode(address, (geocodeData, errorMessage) => {

        if (errorMessage) { return chalkUtils.printErrorMessage(errorMessage) };

        forecast.getForecast(geocodeData, (forecastData, error) => {

            if (errorMessage) { return chalkUtils.printErrorMessage(errorMessage) };

            _printWeatherForecastWithLocation(geocodeData, forecastData);
        })
    });
}

const getWeatherInfo = (address, weatherInfoCallback) => {
    geocode.getGeocode(address, (geocodeData, errorMessage) => {

        if (errorMessage) { return chalkUtils.printErrorMessage(errorMessage) };

        forecast.getForecast(geocodeData, (forecastData, error) => {

            if (errorMessage) { return chalkUtils.printErrorMessage(errorMessage) };

            weatherInfoCallback(forecastData);
        })
    });
}

const getWeatherForecast = (address, weatherInfoCallback) => {
    geocode.getGeocode(address, (geocodeData, errorMessage) => {

        if (errorMessage) { weatherInfoCallback({},errorMessage) };

        forecast.getForecast(geocodeData, (forecastData, error) => {

            if (errorMessage) { weatherInfoCallback({},errorMessage) };

            weatherInfoCallback(_getWeatherForecastWithLocationObject(geocodeData,forecastData),);
        })
    });
}

module.exports = { getGeocodeAndPrintWeatherInfo, getWeatherInfo, getWeatherForecast }