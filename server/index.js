const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const passport = require("passport");

const app = express();

const apiPort = 3006;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
app.use(bodyParser.json());

// Connect to MongoDB
const db = require("./db");
db.on("error", console.error.bind(console, "MongoDB connection error:"));

// Passport middleware
app.use(passport.initialize());

// Passport Config
require("./config/passport")(passport);

// Use Routes
app.use("/api/component", require("./routes/componentRoutes"));
app.use("/api/user", require("./routes/userRoutes"));

app.listen(apiPort, () => console.log(`Server running on port ${apiPort}`));
