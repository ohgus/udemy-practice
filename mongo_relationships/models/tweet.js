const mongoose = require("mongoose");
const { Schema } = mongoose;

mongoose.connect("mongodb://127.0.0.1:27017/relationshipDemo")
    .then(() => {
        console.log("mongo connection open!!");
    })
    .catch(err => {
        console.log("oh no mongo connection error!!")
        console.log(err);
    });

const userSchema = new Schema({
    name: String,
    age: Number
});

const tweetSchema = new Schema({
    text: String,
    likes: Number,
    user: { type: Schema.Types.ObjectId, ref: "User" }
});

const User = mongoose.model("User", userSchema);
const Tweet = mongoose.model("Tweet", tweetSchema);

// const makeTweets = async () => {
//     // const user = new User({ name: "dabak99", age: 4 });
//     const user = await User.findOne({ name: "dabak99" });
//     const tweet2 = new Tweet({ text: "woof woof woof dabak make sounds", likes: 999 });
//     tweet2.user = user;
//     tweet2.save();
// }

// makeTweets();

const findTweets = async () => {
    const t = await Tweet.findOne({}).populate("user", "name");
    console.log(t);
}

findTweets();