const express = require("express");
const app = express();

const cookieParser = require("cookie-parser");

app.use(cookieParser());

app.get("/greet", (req, res) => {
    const {name = "No-Name"} = req.cookies;
    res.send(`Hey There ${name}`);
});

app.get("/setname", (req, res) => {
    res.cookie("name", "Oh Leo");
    res.cookie("animal", "Jindo Dog");
    res.send("I SENT COOKIE!");
});

app.listen(3000, () => {
    console.log("In Port 3000");
});