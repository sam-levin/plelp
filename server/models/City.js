const { Schema, model } = require('mongoose');
const Location = require ("./Location");
const Post = require('./Post')
const citySchema = new Schema (
    {
        cityname: {
            type:String   
        },
        posts: [
            Post.schema],

        locations: [Location.schema]
    }
)
const City = model('City', citySchema);

module.exports = City;