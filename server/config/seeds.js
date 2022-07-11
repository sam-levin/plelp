const db = require("./connection");
const { City, Location, Post, Reply, User } = require("../models");

db.once("open", async () => {
  await City.deleteMany();

  const cities = await City.insertMany([
    { cityName: "San Francisco" },
    { cityName: "Sacramento" },
    { cityName: "Seattle" },
    { cityName: "New York" },
    { cityName: "Santa Cruz" },
  ]);

  console.log("Cities seeded");

  await User.deleteMany();

  const users = await User.insertMany([
    {
      email: "sam@gmail.com",
      password: "password",
      posts: [],
      username: "sam",
    },
    {
      email: "tammam@gmail.com",
      password: "password1",
      posts: [],
      username: "tam",
    },
    {
      email: "saul@gmail.com",
      password: "password2",
      posts: [],
      username: "saul",
    },
  ]);

  console.log(users[1]);
  console.log("users seeded");

  const posts = await Post.insertMany([
    {
      city: cities[1],
      username: users[0].username,
      title: "Test 1",
      postText: "testing",
      replies: [],
    },
    {
      city: cities[0],
      username: users[0].username,
      title: "Test 1",
      postText: "testing",
      replies: [],
    },
  ]);

  console.log("posts seeded");

  process.exit();
});
