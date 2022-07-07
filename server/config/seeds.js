const db = require('./connection');
const City = require('../models/City');
const User = require('../models/User');
const Post = require('../models/Post');


db.once('open', async () => {
await City.deleteMany();

const cities = await City.create([
        { cityname: 'San Francisco'},
        { cityname: 'Sacramento' },
        { cityname: 'Seattle' },
        { cityname: 'New York'},
        { cityname: 'Santa Cruz'} 
       
]);  

console.log('Cities seeded')

await User.deleteMany();

  await User.create(
        {
            email: 'sam@gmail.com',
            password: 'password',
            username: 'user1',
            posts: []
        })

  await User.create(
        {
            email: 'tammam@gmail.com',
            password: 'password1',
            username: 'user2',
            posts: []
        })
  await User.create(
        {
            email: 'saul@gmail.com',
            password: 'password2',
            username: 'user3',
            posts: []
        }
  )

  console.log('users seeded')
await Post.deleteMany();

const posts = await Post.create ([
    {title: 'A Good Place to get Burgers',postText: 'This spot at ___ has great Burgers! 11/10!',username: 'user1', replies: [{replyBody: 'Really? Ill check it out.', username: 'user2'}]},
    {title: 'Cool Farmers Market',postText: 'Over here there is an amazing Farmers Market!',username: 'user2', replies: [{replyBody: 'Really? Ill check it out.', username: 'user3'},{replyBody: 'Its a fine place, but I can think of a better place', username: 'user1'}]}

])
    console.log('posts seeded')
  

    process.exit();
})