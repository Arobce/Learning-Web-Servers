const request = require("request");


const makeRequestAndGetRequestDataAndError = (options, callback) => {
    request(
        options, (error, response) => {
            callback(error,response);
        }
    )
}

module.exports = {makeRequestAndGetRequestDataAndError};