const { Schema, model } = require("mongoose");

const citySchema = new Schema({
  cityname: {
    type: String,
    required: true,
  },
  posts: [
    {
      type: Schema.Types.ObjectId,
      ref: "Post",
    },
  ],
});

const City = model("City", citySchema);

module.exports = City;
