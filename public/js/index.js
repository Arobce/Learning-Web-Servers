
const baseApiUrl = "/weather?address=";
const weatherForm = document.querySelector(".form");

const locationNode = document.querySelector(".location");
const forecastNode = document.querySelector(".forecast");
const errorMessageNode = document.querySelector(".error");

const getHttpResponse = (url, callback) => {
    fetch(url).then((response) => {
        response.json().then((data) => {
            callback(data);
        });
    });
}


const printHttpResponse = (url) => {
    getHttpResponse(url, (data) => {
        console.log(data);
    })
}



weatherForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const location = getLocation();
    const link = addLocationParameterToApiLink(location);

    setLocationDom("Loading....");

    getHttpResponse(link, (body) => {
        if (body.error) {
            setErrorDom(body.error)
        } else {
            setLocationDom(body.location);
            setForecastDom(body.forecast);
        }

    })
})


const addLocationParameterToApiLink = location => baseApiUrl + location;

const getLocation = () => document.querySelector(".location-field").value;

const setLocationDom = location => locationNode.innerHTML = location;

const setForecastDom = forecast => forecastNode.innerHTML = forecast;

const setErrorDom = error => errorMessageNode.innerHTML = error;



