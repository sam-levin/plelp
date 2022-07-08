// just a thought: maybe we postpone the reactions until we have the rest of it figured out?
// for example maybe we can figure out the google api and make that look good before adding something easy but still time consuming like this
const { Schema } = require("mongoose");

const replySchema = new Schema(
  {
    replyBody: {
      type: String,
      required: true,
      maxlength: 280,
    },
    username: {
      type: String,
      required: true,
    },
    createdAt: {
      type: Date,
      default: Date.now,
      get: (timestamp) => dateFormat(timestamp),
    },
  },
  {
    toJSON: {
      getters: true,
    },
  }
);

module.exports = replySchema;
