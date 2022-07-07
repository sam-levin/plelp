const { Schema, model } = require('mongoose');
const replySchema = require ("./Reply");


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
        type: String,
        required: true
    },

     createdAt: {
        type: Date,
        default: Date.now,
        get: (createdAtVal) => moment(createdAtVal).format('MMM DD, YYYY [at] hh:mm a')
     },
     
     replies: [replySchema]

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