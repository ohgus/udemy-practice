const express = require("express");
const app = express();

app.use((req, res) => {
    console.log("we got a new request!!");
    // res.send("i am response!");
    // res.send({
    //     color: "red"
    // })
    res.send("<h1>THis is my response!</h1>");
})

app.listen(3000, () => {
    console.log("listening on port 3000!");
})