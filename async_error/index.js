const express = require("express");
const app = express();
const path = require("path");
const mongoose = require("mongoose");
const methodOverride = require("method-override");
const AppError = require("./AppError");
mongoose.set("strictQuery", true);

const Product = require("./models/product");

mongoose.connect('mongodb://127.0.0.1:27017/farmStand2')
    .then(() => {
        console.log("mongo connection open!!");
    })
    .catch(err => {
        console.log("oh no mongo error!!");
        console.log(err);
    });

    
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.use(express.urlencoded({extended: true}));
app.use(methodOverride("_method"));

const categories = ["fruit", "vegetable", "dairy"];

function wrapAsync(fn) {
    return function (req, res, next) {
        fn(req, res, next).catch(e => next(e));
    }
}

app.get("/products", wrapAsync( async (req, res, next) => {
    const {category} = req.query;
    if(category){
        const products = await Product.find({category});
        res.render("products/index", {products, category});
    } else {
        const products = await Product.find({});
        res.render("products/index", {products, category: "All"});
    }
}));

app.get("/products/new", (req, res) => {
    res.render("products/new", {categories});
});

app.post("/products", wrapAsync( async (req, res, next) => {
    const newProduct = new Product(req.body);
    await newProduct.save();
    res.redirect(`/products/${newProduct._id}`);
}));


app.get("/products/:id", wrapAsync( async (req, res, next) => {
    const {id} = req.params;
    const product = await Product.findById(id);
    if(!product) {
        throw next(new AppError("Product Not Found", 404));
    }
    res.render("products/show", {product});
}));

app.get("/products/:id/edit", wrapAsync( async (req, res, next) => {
    const {id} = req.params;
    const product = await Product.findById(id);
    if(!product) {
        throw next(new AppError("Product Not Found", 404));
    }
    res.render("products/edit", {product, categories});
}));

app.put("/products/:id",wrapAsync( async (req, res, next) => {
    const {id} = req.params;
    const product = await Product.findByIdAndUpdate(id, req.body, {runValidators: true, new: true});
    res.redirect(`/products/${product._id}`);
}));

app.delete("/products/:id",wrapAsync( async (req, res, next) => {
    const {id} = req.params;
    const productDelete = await Product.findByIdAndDelete(id);
    res.redirect("/products");
}));

const handleValidationErr = err => {
    console.dir(err);
    return new AppError(`Validation Failed...${err.message}`, 400);
}

app.use((err, req, res, next) => {
    console.log(err.name);
    if (err.name === "ValidationError") err = handleValidationErr(err);
    next(err);
});

app.use((err, req, res, next) => {
    const{status = 500, message = "something went wrong"} = err;
    res.status(status).send(message);
});

app.listen(3000, () => {
    console.log("app is listening on port 3000!");
});