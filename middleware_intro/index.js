const express = require("express");
const app = express();
const morgan = require("morgan");

app.use(morgan("tiny"));

app.use((req, res, next) => {
    req.requestTime = Date.now();
    console.log(req.method, req.path);
    next();
});

app.use("/dogs", (req, res, next) => {
    console.log("I LOVE DOGS");
    next();
});

const verifyPassword = (req, res, next) => {
    const {password} = req.query;
    if(password === "sbk"){
       return next(); // return 을 사용하지 않으면 서버가 클라이언트에 두개 이상의 응답을 보내려고 하여 에러가 발생한다.
    }
    // res.send("SORRY U NEED A PASSWORD!");
    throw new Error("Password Required!");
}

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

app.get("/secret", verifyPassword, (req, res) => {
    res.send("My Secret is: I will marry with sbk!");
});

app.use((req, res) => {
    res.status(404).send("NOT FOUND!");
});

app.listen(3000, () => {
    console.log("App is running on Port 3000");
});