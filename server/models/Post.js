const { Schema, model } = require("mongoose");
// Replies were not feasible for the MVP
// const replySchema = require("./Reply");
const City = require("./City");
const moment = require("moment");

const postSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    postText: {
      type: String,
      required: true,
      minlength: 1,
      maxlength: 300,
    },
    username: {
      type: String,
      required: true,
    },
    createdAt: {
      type: Date,
      default: Date.now,
      get: (createdAtVal) =>
        moment(createdAtVal).format("MMM DD, YYYY [at] hh:mm a"),
    },
    // for MVP purposes this is a string - would ideally be a model on its own that that has id's and doesn't allow for duplicates
    location: {
      type: String,
      required: true,
    },

    city: [City.schema],
  },
  {
    toJSON: {
      virtuals: true,
      getters: true,
    },
    id: false,
  }
);
//Tracks reply count
// postSchema.virtual("replyCount").get(function () {
//   return this.replies.length;
// });

const Post = model("Post", postSchema);

module.exports = Post;
