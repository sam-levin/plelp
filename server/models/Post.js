const { Schema, model } = require('mongoose');
const replySchema = require ("./Reply");


const postSchema = new Schema ({
    description: {
        type: String,
        required: true
    },

    username:{
        type: String,
        required: true
    },

    title: {
         type: String,
         required: true
     },

     createdAt: {
        type: Date,
        default: Date.now,
        get: (createdAtVal) => moment(createdAtVal).format('MMM DD, YYYY [at] hh:mm a')
     },
     
     replys: [replySchema]

})


const Post = model('Post', postSchema);

module.exports = Post;