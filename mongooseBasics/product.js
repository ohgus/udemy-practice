const mongoose = require("mongoose");
mongoose.set("strictQuery", true);
mongoose.connect('mongodb://127.0.0.1:27017/shopApp')
.then(() => {
    console.log("connection open!!");
})
.catch(err => {
    console.log("oh no error!!");
    console.log(err);
})

const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true  // 필수로 정의되어야 함을 명시
    },
    price: {
        type: Number,
        required: true
    }
});

const Product = mongoose.model("Product", productSchema);

const bike = new Product({ name: "Mountain Bike", Price: 599});
bike.save()
    .then(data => {
        console.log("IT WORKED!");
        console.log(data);
    })
    .catch(err => {
        console.log("OH NO ERRER!!");
        console.log(err);
    })