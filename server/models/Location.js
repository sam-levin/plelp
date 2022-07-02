const { Schema, model } = require('mongoose');


const locationSchema = new Schema ({
    address: {
         type: String,
         required: true
     },
     posts:[
        {
            type: Schema.Types.ObjectId,
            ref: 'Post'
        }
     ],
})


const Location = model('Location', locationSchema);

module.exports = Location;