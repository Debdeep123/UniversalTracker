const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ComponentSchema = new Schema({
  ssid: {
    type: String,
    required: true,
  },
  c_data: { type: String, required: true },
  Created_On: {
    type: Date,
    default: Date.now,
  },
  Updated_On: {
    type: Date,
  },
  Created_By: {
    type: Schema.Types.ObjectId,
    ref: "users",
  },
  Updated_By: {
    type: Schema.Types.ObjectId,
    ref: "users",
  },
});

module.exports = Component = mongoose.model("component", ComponentSchema);
