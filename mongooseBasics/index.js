const mongoose = require("mongoose");
mongoose.set("strictQuery", true);
mongoose.connect('mongodb://127.0.0.1:27017/movieApp')
.then(() => {
    console.log("connection open!!");
})
.catch(err => {
    console.log("oh no error!!");
    console.log(err);
})
// const db = mongoose.connection;
// db.on("error", console.error.bind(console, "connection error"));
// db.once("open", function() {
//     console.log("connection open!");
// })

// 무한루프 에러 해결 코드
// node -i -e "$(< index.js)"


// 각각의 키의 밸류 값의 데이터 타입을 지정.
const movieSchema = new mongoose.Schema({
    title: String,
    year: Number,
    score: Number,
    rating: String
});

const Movie = mongoose.model("Movie", movieSchema);
const amadeus = new Movie({title: "Amadeus", year: 1986, score: 9.2, rating: "R"});