const express = require("express");
const app = express();
const morgan = require("morgan");

app.use(morgan("tiny"));

app.use((req, res, next) => {
    req.requestTime = Date.now();
    console.log(req.method, req.path);
    next();
});

// app.use((req, res, next) => {
//     console.log("first middleware");
//     next();
//     console.log("after middleware");
// });
// app.use((req, res, next) => {
//     console.log("second middleware");
//     next();
// });

app.get("/", (req, res) => {
    console.log(`REQUEST TIME: ${req.requestTime}`);
    res.send("Home Page!");
});

app.get("/dogs", (req, res) => {
    console.log(`REQUEST TIME: ${req.requestTime}`);
    res.send("Woof Woof!");
});

app.listen(3000, () => {
    console.log("App is running on Port 3000");
})