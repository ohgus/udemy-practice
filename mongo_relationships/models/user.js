const mongoose = require("mongoose");

mongoose.connect("mongodb://127.0.0.1:27017/relationshipDemo")
    .then(() => {
        console.log("mongo connection open!!");
    })
    .catch(err => {
        console.log("oh no mongo connection error!!")
        console.log(err);
    });

const userSchema = new mongoose.Schema({
    first: String,
    last: String,
    addresses: [
        {
            _id: { _id: false },
            street: String,
            city: String,
            state: String,
            country: String
        }
    ]
});

const User = mongoose.model("User", userSchema);

const makeUser = async () => {
    const u = new User({
        first: "Christian",
        last: "Romero"
    });
    u.addresses.push({
        street: "456 Sesame St.",
        city: "London",
        state: "LD",
        country: "U.K"
    });
    const res = await u.save();
    console.log(res);
}

const addAddress = async (id) => {
    const user = await User.findById(id);
    user.addresses.push(
        {
            street: "22 3rd St.",
            city: "London",
            state: "LD",
            country: "U.K"
        }
    )
    const res = await user.save();
    console.log(res);
}

addAddress("64a3cd111f0bf940f3ed15ae");