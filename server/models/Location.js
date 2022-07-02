const { Schema, model } = require('mongoose');


const locationSchema = new Schema ({
    post:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Post'
    },
    user: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    }],
    content: {
        type: String,
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now,
        get: (createdAtVal) => moment(createdAtVal).format('MMM DD, YYYY [at] hh:mm a')
     }

})

const Location = model('Location', postSchema);

module.exports = Location;