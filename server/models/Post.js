const { Schema, model } = require('mongoose');
const mongoose = require('mongoose')
const replySchema = require ("./Reply");
const { User } = require ('./User')


const postSchema = new Schema ({
  title: {
    type: String,
    required: true
},  
  postText: {
        type: String,
        required: true,
        minlength: 1,
        maxlength: 280
    },

    username:{
      type: Schema.Types.String,
      ref: 'User'
    },

     createdAt: {
        type: Date,
        default: Date.now,
        get: (createdAtVal) => moment(createdAtVal).format('MMM DD, YYYY [at] hh:mm a')
     },
     
     replies: [replySchema],

     city: {
        type: Schema.Types.ObjectId,
        ref: 'City'
     },

    location: {
      type: Schema.Types.ObjectId,
      ref: 'Location'
    }

    },  
    {
    toJSON: {
      getters: true
    }
  }
);

postSchema.virtual('replyCount').get(function() {
    return this.replies.length;
  });
  


const Post = model('Post', postSchema);

module.exports = Post;