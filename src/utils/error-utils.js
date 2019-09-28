
const checkErrorForWeatherRequests = (error, body) => {
    let errorMessage;
    if (_checkForLowLevelErrors(error)) {
        errorMessage = _checkForLowLevelErrors(error);
    } else if (body.error) {
        errorMessage = body.error;
    }

    return errorMessage;

}

const checkErrorForGeocodingRequests = (error, body) => {
    let errorMessage;

    if (_checkForLowLevelErrors(error)) {
        errorMessage = _checkForLowLevelErrors(error);
    } else if (body.message) {
        errorMessage = body.message;
    } else if (body.features.length == 0) {
        errorMessage = "Unable to find location try another search";
    }

    return errorMessage;


}

const checkErrorForAddressPassed = address => {
    let errorMessage;

    if(!address){
        errorMessage = "No address Provided";
    }

    return errorMessage;
}

const _checkForLowLevelErrors = error => {
    if (error) {
        return "Connection Failed!!";
    }
}

module.exports = {
    checkErrorForWeatherRequests,
    checkErrorForGeocodingRequests,
    checkErrorForAddressPassed
}