const express = require("express");
const app = express();
const User = require("./models/user");
const path = require("path");
const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

mongoose.connect("mongodb://localhost:27017/authDemo")
.then(() => {
    console.log("mongo connection open!");
})
.catch(err => {
    console.log("oh no mongo connection err!");
    console.log(err);
});

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.use(express.urlencoded({extended: true}));

app.get("/", (req, res) => {
    res.send("this is homepage!");
});

app.get("/register", (req, res) => {
    res.render("register");
});

app.post("/register", async (req, res) => {
    const {username, password} = req.body;
    const hash = await bcrypt.hash(password, 12);
    const user = new User({
        username,
        password: hash
    });
    await user.save();
    res.redirect("/");
});

app.get("/login", (req, res) => {
    res.render("login");
});

app.post("/login", async (req, res) => {
    const {username, password} = req.body;
    const user = await User.findOne({username});
    const validPassword = await bcrypt.compare(password, user.password);
    if(validPassword) {
        res.send("welcome!");
    } else {
        res.send("try again!");
    }
});

app.get("/secret", (req, res) => {
    res.send("this is secret!");
});

app.listen(3000, () => {
    console.log("serving 3000 port!");
});