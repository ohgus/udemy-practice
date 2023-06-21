const express = require("express");
const app = express();

// app.use((req, res) => {
//     console.log("we got a new request!!");
//     // res.send("i am response!");
//     // res.send({
//     //     color: "red"
//     // })
//     res.send("<h1>THis is my response!</h1>");
// })

// "/" => "welcome"
app.get("/", (req, res) => {
    res.send("WELCOME HOME PAGE!!");
})
// /cats => "meow"
app.get("/cats", (req, res) => {
    res.send("MEOW!!");
})
app.post("/cats", (req, res) => {
    res.send("POST MEOW!!");
})
// /dogs => "woof"
app.get("/dogs", (req, res) => {
    res.send("WOOF!!");
})
// "*" => "i dont know that path" 항상 맨 밑에 와야 함!
app.get("*", (req, res) => {
    res.send("I DONT KNOW THAT PATH!!");
})


app.listen(3000, () => {
    console.log("listening on port 3000!");
})