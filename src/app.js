const path = require("path");

const express = require("express");
const app = express();
const hbs = require('hbs');

const { getWeatherForecast } = require("./utils/forecast-gecode-utils");

const configPaths = {
    publicPath: path.join(__dirname, "../public"),
    viewsPath: path.join(__dirname, "../templates/views"),
    partialsPath: path.join(__dirname, "../templates/partials")
}

//Set Engine
app.set('view engine', 'hbs');
//Set views Path
app.set('views', configPaths.viewsPath);
//Register Partials
hbs.registerPartials(configPaths.partialsPath);

//Static Files
app.use(express.static(configPaths.publicPath))

//Routes
app.get('', (req, res) => {
    res.render("index", {
        title: "Weahter",
        name: "Chape"
    });
})

app.get('/about', (req, res) => {
    res.render('about', {
        title: "About Page",
        name: "Chape"
    });
})

app.get('/weather', (req, res) => {
    if (!req.query.address) {
        return res.send({ error: 'Address is required!!' });
    }

    let address = req.query.address;

    getWeatherForecast(address, forecast => {
        forecast.address = address;
        res.send(forecast);
    })

})

app.get('/help', (req, res) => {
    res.render('help', {
        title: "Help Page",
        name: "Chape"
    });
})

app.get("/help/*", (req, res) => {
    res.render('404', {
        message: "Help Article not found"
    })
})

app.get('*', (req, res) => {
    res.render('404', {
        message: "Page not found"
    })
})



//Activate Server
app.listen(3000, () => {
    console.log("Running at 3000");
})