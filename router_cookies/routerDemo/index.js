const express = require("express");
const app = express();
const shelterRoutes = require("./routes/shelters");
const dogRoutes = require("./routes/dogs");
const adminRoutes = require("./routes/admin");

app.use("/dogs", dogRoutes);
app.use("/shelters", shelterRoutes);
app.use("/admin", adminRoutes);

app.listen(3000, () => {
    console.log("In Port 3000!");
});