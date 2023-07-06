const express = require("express");
const app = express();
const shelterRoutes = require("./routes/shelters");
const dogRoutes = require("./routes/dogs");

app.use("/dogs", dogRoutes);
app.use("/shelters", shelterRoutes);

app.listen(3000, () => {
    console.log("In Port 3000!");
});