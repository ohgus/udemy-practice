const express = require("express");
const app = express();
const path = require("path");
const redditData = require("./data.json");

//정적 에셋 제공하기
app.use(express.static(path.join(__dirname,"public"))); // 절대경로 설정
// app.use(express.static("public"));

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
    const data = redditData[subreddit];
    if (data) {
        res.render("subreddit",{ ...data});
    } else {
        res.render("notfound", { subreddit });
    }
})

app.get("/random", (req, res) => {
    const num = Math.floor(Math.random() * 10) + 1;
    res.render("random",{ rand: num});
})

app.listen(3000,() => {
    console.log("listening on port 3000");
})