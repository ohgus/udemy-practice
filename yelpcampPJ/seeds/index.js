const mongoose = require("mongoose");
const Campground = require("../models/campground");
const {descriptors, places} = require("./seedHelpers");
const cities = require("./cities");

mongoose.connect("mongodb://localhost:27017/yelp-camp");

const db = mongoose.connection;
db.on("error", console.error.bind(console,"connection error:"));
db.once("open", () => {
    console.log("Database connected");
})

const sample = array => array[Math.floor(Math.random() * array.length)];


const seedDB = async () => {
    await Campground.deleteMany({});
    for (let i = 0; i < 50; i++){
        const random1000 = Math.floor(Math.random() * 1000) + 1;
        const price = Math.floor(Math.random() * 20) + 10;
        const camp = new Campground({
            // ohms user id
            author: "64ad3b275463b8784686b3f0",
            location: `${cities[random1000].city}, ${cities[random1000].state}`,
            title: `${sample(descriptors)} ${sample(places)}`,
            description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repudiandae, natus qui, veniam recusandae explicabo rem labore aut ex sunt unde, minus atque animi facilis nesciunt optio quisquam magnam debitis consequatur?",
            price,
            geometry: {
              type: 'Point',
              coordinates: [
                cities[random1000].longitude,
                cities[random1000].latitude,
              ]
            },        
            images: [
                {
                  url: 'https://res.cloudinary.com/dtbwk2h40/image/upload/v1689170637/YelpCamp/nneunxyt5nlrhqs9c5z9.avif',
                  filename: 'YelpCamp/nneunxyt5nlrhqs9c5z9',
                },
                {
                  url: 'https://res.cloudinary.com/dtbwk2h40/image/upload/v1689170638/YelpCamp/cibsanane4ecabqzbogy.avif',
                  filename: 'YelpCamp/cibsanane4ecabqzbogy',
                }
              ]
        });
        await camp.save();
    }
}

seedDB().then(() => {
    mongoose.connection.close();
})