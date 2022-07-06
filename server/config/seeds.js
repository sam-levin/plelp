const db = require('./connection');
const { City, Location, Post, Reply, User } = require('../models')

db.once('open', async () => {
    await City.deleteMany();

    const cities = await City.insertMany([
        { name: 'San Francisco' },
        { name: 'Sacramento' },
        { name: 'Seattle' },
        { name: 'New York' },
        { name: 'Santa Cruz' },
    ]);  

    console.log('Cities seeded')

    await User.deleteMany();

  await User.create(
        {
            email: 'sam@gmail.com',
            password: 'password',
            posts: []
        })

  await User.create(
        {
            email: 'tammam@gmail.com',
            password: 'password1',
            posts: []
        })
  await User.create(
        {
            email: 'saul@gmail.com',
            password: 'password2',
            posts: []
        }
  )

    const posts = await Post.insertMany([
        {
            
        }
    ])

    console.log('users seeded')

    process.exit();
})