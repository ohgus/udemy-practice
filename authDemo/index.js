const express = require("express");
const app = express();
const User = require("./models/user");
const path = require("path");

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.get("/register", (req, res) => {
    res.render("register");
})

app.get("/secret", (req, res) => {
    res.send("this is secret!");
})

app.listen(3000, () => {
    console.log("serving 3000 port!");
});