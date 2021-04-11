const mongoose = require("mongoose");

const mondoDB_URI = require("../config/keys").mongoURI;

mongoose.set("useUnifiedTopology", true);
mongoose.set("useNewUrlParser", true);
mongoose.set("useFindAndModify", false);
mongoose.set("useCreateIndex", true);

mongoose
  .connect(mondoDB_URI)
  .then(() => console.log("MongoDB Connected"))
  .catch((err) => console.error("Connection error: ", err.message));

const dbConn = mongoose.connection;

module.exports = dbConn;
