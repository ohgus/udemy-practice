const express = require("express");
const app = express();
const path = require("path");

// ejs 파일을 불러오는 express 의 메서드
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "/views")); // 모든 디렉토리에서 views 폴더에 접근을 가능하게 해준다.

app.get("/", (req, res) => {
    res.render("home");
})

app.get("/cats", (req, res) => {
    const cats = [
        "blue", "rocket" , "monty", "red", "leo"
    ];
    res.render("cats" , { cats });
})

app.get("/r/:subreddit",(req, res) => {
    const {subreddit} = req.params;
    res.render("subreddit",{subreddit});
})

app.get("/random", (req, res) => {
    const num = Math.floor(Math.random() * 10) + 1;
    res.render("random",{ rand: num});
})

app.listen(3000,() => {
    console.log("listening on port 3000");
})