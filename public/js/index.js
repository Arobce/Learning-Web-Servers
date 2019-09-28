
const baseApiUrl = "http://localhost:3000/weather?address=";
const weatherForm = document.querySelector(".form");

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

    printHttpResponse(link);
    
})


const addLocationParameterToApiLink = location => baseApiUrl + location;
const getLocation = () => document.querySelector(".location-field").value;

const getLocationFromField = () => {
    return document.querySelector(".form")
}




