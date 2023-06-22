const express = require("express");
const app = express();

// ejs 파일을 불러오는 express 의 메서드
app.set("view engine", "ejs");

app.get("/", (req, res) => {
    res.render("home");
})

app.listen(3000,() => {
    console.log("listening on port 3000");
})