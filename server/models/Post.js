const { Schema, model } = require('mongoose');
const mongoose = require('mongoose')

const postSchema = new Schema ({
    user: [{type: mongoose.Schema.Types.ObjectId,
        ref: 'User'}],
    title: {
         type: String,
         required: true
     },
     description: {
         type: String,
         required: true
     },

     createdAt: {
        type: Date,
        default: Date.now,
        get: (createdAtVal) => moment(createdAtVal).format('MMM DD, YYYY [at] hh:mm a')
     }

})


const Post = model('Post', postSchema);

module.exports = Post;