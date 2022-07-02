const { Schema, model } = require('mongoose');


const locationSchema = new Schema ({
    address: {
         type: String,
         required: true
     },
     posts:[postSchema],
})


const Location = model('Location', locationSchema);

module.exports = Location;