const mongoose = require('mongoose')
const Post = require('./Post')
const { Schema, model } = require('mongoose');

const citySchema = new Schema (
    {
        cityName: {
            type:String   
        },
        posts: [
            Post.schema
        ],

        locations: [
            {
                type: Schema.Types.ObjectId,
                ref: 'Location'
            }
        ]
    }
)
const City = model('City', citySchema);

module.exports = City;