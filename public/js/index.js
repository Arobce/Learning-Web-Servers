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

printHttpResponse("http://localhost:3000/weather?address=nepal");