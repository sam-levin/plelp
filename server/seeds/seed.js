const db = require('../config/connection');
const { City, User, Post } = require('../models')

const userData = require('./userData.json');
const cityData = require('./cityData.json');


db.once('open', async () => {
    // clean database
    await Post.deleteMany({});
    await City.deleteMany({});
    await User.deleteMany({});
    console.log('Deleting existing data . . .')
  
    // bulk create each model
    await City.insertMany(cityData);
    console.log('Entering City data . . .')
    await User.insertMany(userData);
    console.log('Entering User data . . .')
 
  
  
  
    console.log('all done!');
    process.exit(0);
  });