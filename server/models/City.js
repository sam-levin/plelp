const { Schema, model } = require('mongoose');

const citySchema = new Schema (
    {
        cityname: {
            type:String   
        },
        posts: [{
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Post'}],

        locations: [locationSchema]
    }
)
const City = model('City', citySchema);

module.exports = City;