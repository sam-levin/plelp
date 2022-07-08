const mongoose = require("mongoose");

const { Schema, model } = require("mongoose");

const citySchema = new Schema({
  name: {
    type: String,
  },
  posts: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Post",
    },
  ],

  locations: [
    {
      type: Schema.Types.ObjectId,
      ref: "Location",
    },
  ],
});
const City = model("City", citySchema);

module.exports = City;
