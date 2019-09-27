const path = require("path");

const express = require("express");
const app = express();

const publicPath = path.join(__dirname,"../public");


app.use(express.static(publicPath))


app.get('/weather', (req, res) => {
    res.send({
        weather: "Raew",
        location: "Nepal"
    });
})


app.listen(3000, () => {
    console.log("Running at 3000");
})