const path = require("path");

const express = require("express");
const app = express();

const publicPath = path.join(__dirname, "../public");

//Set Engine
app.set('view engine', 'hbs');

//Static Files
app.use(express.static(publicPath))

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
    });
})

app.get('/help', (req, res) => {
    res.render('help', {
        title: "Help Page",
    });
})

//Activate Server
app.listen(3000, () => {
    console.log("Running at 3000");
})