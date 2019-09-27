const path = require("path");

const express = require("express");
const app = express();

const publicPath = path.join(__dirname,"../public");


app.use(express.static(publicPath))


app.get('', (req, res) => {
    res.send("Hellow");
})

app.get('/about', (req, res) => {
    res.send("<h1>About Page</h1>");
})

app.get('/help', (req, res) => {
    res.send("Wazup");
})

app.get('/weather', (req, res) => {
    res.send({
        weather: "Raew",
        location: "Nepal"
    });
})


app.listen(3000, () => {
    console.log("Running at 3000");
})