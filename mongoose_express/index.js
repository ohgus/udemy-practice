const express = require("express");
const app = express();
const path = require("path");
const mongoose = require("mongoose");
mongoose.set("strictQuery", true);

mongoose.connect('mongodb://127.0.0.1:27017/shopApp')
    .then(() => {
        console.log("mongo connection open!!");
    })
    .catch(err => {
        console.log("oh no mongo error!!");
        console.log(err);
    });


app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.get("/dog", (req, res) => {
    res.send("woof!");
})

app.listen(3000, () => {
    console.log("app is listening on port 3000!");
})