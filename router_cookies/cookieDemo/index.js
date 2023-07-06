const express = require("express");
const app = express();

app.get("/greet", (req, res) => {
    res.send("HEY THERE!");
});

app.get("/setname", (req, res) => {
    res.cookie("name", "Oh Leo");
    res.cookie("animal", "Jindo Dog");
    res.send("I SENT COOKIE!");
});

app.listen(3000, () => {
    console.log("In Port 3000");
});