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
        required: true,  // 필수로 정의되어야 함을 명시
        maxlength: 20
    },
    price: {
        type: Number,
        required: true,
        min: [0, "Price must be positive!"] // 두번째로 들어오는 값은 우리가 에러상황에서 나오는 커스텀 에러 메시지
    },
    onSale: {
        type: Boolean,
        default: false
    },
    categories: [String],
    qty: {
        online: {
            type: Number,
            default: 0
        },
        inStore: {
            type: Number,
            default: 0
        }
    },
    size: {
        type: String,
        enum: ["S", "M", "L"] // 주어진 선택지에 있는 결과인지 확인하는 옵션 
    }
});

const Product = mongoose.model("Product", productSchema);

// const bike = new Product({ name: "Mountain Bike", price: 599});
// const bike = new Product({ name: "Bike Helmet", price: 29.5});
// const bike = new Product({ name: "Bike Helmet2", price: 19.5, categories: ["Cycling", "Safety"]});
// const bike = new Product({ name: "Bike Helmet3", price: 15.5, categories: ["Cycling", "Safety"]});
const bike = new Product({ name: "Bike Jersey", price: 29.5, categories: ["Cycling"], size: "S"});

bike.save()
    .then(data => {
        console.log("IT WORKED!");
        console.log(data);
    })
    .catch(err => {
        console.log("OH NO ERRER!!");
        console.log(err);
    })

// Product.findOneAndUpdate({name: "Tire Pump"}, {price: 20}, {new: true, runValidators: true})
//     .then(data => {
//         console.log("IT WORKED!");
//         console.log(data);
//     })
//     .catch(err => {
//         console.log("OH NO ERRER!!");
//         console.log(err);
//     })