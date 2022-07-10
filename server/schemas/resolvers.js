const User = require('../models/User');
const Post = require('../models/Post');
const City = require('../models/City')
const { AuthenticationError } = require('apollo-server-express');
const { signToken } = require('../utils/auth');


const resolvers = {
  Query: {
    me: async (parent, args, context) => {
      if (context.user) {
        const userData = await User.findOne({ _id: context.user._id })
          .select("-__v -password")
          .populate("posts");

      // find all users
      users: async () => {
        return User.find()
          .select('-__v -password')
          .populate('posts')
      },

      // finding user details with username
      user: async (parent, { username }) => {
        return User.findOne({ username })
          .select('-__v -password')
          .populate('posts');
      },
      
      posts: async (parent, { username }) => {
        const params = username ? { username } : {};
        return Post.find(params).sort({ createdAt: -1 });
      },

      post: async (parent, { _id }) => {
        return Post.findOne({ _id });
      },

      cityposts: async (parent, { cityname }) => {
        const params = cityname ? { cityname } : {};
        return Post.find(params).sort({ createdAt: -1 });
      },

      cities: async() => {
        return City.find()
          .select('-__v')
          .populate('posts')
      }

      throw new AuthenticationError("Not logged in");
    },
    Mutation: {
      addUser: async (parent, args) => {
        const user = await User.create(args);
        const token = signToken(user);
  
        return { token, user };
      },
      login: async (parent, { email, password }) => {
        const user = await User.findOne({ email });
  
        if (!user) {
          throw new AuthenticationError('Incorrect credentials');
        }
  
        const correctPw = await user.isCorrectPassword(password);
  
        if (!correctPw) {
          throw new AuthenticationError('Incorrect credentials');
        }
  
        const token = signToken(user);
        return { token, user };
      },
      addPost: async (parent, {postText , title , location, cityId} , context) => {
          if (context.user) {
              const post = await Post.create({ ... {postText , title , location, cityId} , username: context.user.username });
  
              await User.findByIdAndUpdate(
                  { _id: context.user._id },
                  { $push: { posts: post._id } },
                  { new: true }
                );

                await City.findByIdAndUpdate(
                  { _id: cityId },
                  { $push: { posts: post._id } },
                  { new: true}
                )
               
          
               
      
                return post;
          }
          throw new AuthenticationError('You need to be logged in!');
  
      },
      addReply: async (parent, { postId, replyBody }, context) => {
          if (context.user) {
            const updatedPost = await Post.findOneAndUpdate(
              { _id: postId },
              { $push: { replies: { replyBody, username: context.user.username } } },
              { new: true, runValidators: true }
            );
    
            return updatedPost;
          }
    
          throw new AuthenticationError('You need to be logged in!');
        },
  }

    // find all users
    users: async () => {
      return User.find().select("-__v -password").populate("posts");
    },

    // finding user details with username
    user: async (parent, { username }) => {
      return User.findOne({ username })
        .select("-__v -password")
        .populate("posts");
    },

    allPosts: async (parents, { city }) => {
      const params = city ? { city } : {};
      return Post.find(params).sort({ createdAt: -1 });
    },

    // finding posts by username
    posts: async (parent, { username }) => {
      const params = username ? { username } : {};
      return Post.find(params).sort({ createdAt: -1 });
    },

    // finding post information by id
    post: async (parent, { _id }) => {
      return Post.findOne({ _id });
    },

    // get all locations for a city
    locations: async (parent, { city }) => {
      const params = city ? { city } : {};
      return Location.find(params).sort({ createdAt: -1 });
    },

    cities: async () => {
      return City.find().select("-__v").populate("posts");
    },
  },
  Mutation: {
    addUser: async (parent, args) => {
      const user = await User.create(args);
      const token = signToken(user);

      return { token, user };
    },
    login: async (parent, { email, password }) => {
      const user = await User.findOne({ email });

      if (!user) {
        throw new AuthenticationError("Incorrect credentials");
      }

      const correctPw = await user.isCorrectPassword(password);

      if (!correctPw) {
        throw new AuthenticationError("Incorrect credentials");
      }

      const token = signToken(user);
      return { token, user };
    },
    addPost: async (parent, args, context) => {
      if (context.user) {
        const post = await Post.create({
          ...args,
          username: context.user.username,
        });

        await User.findByIdAndUpdate(
          { _id: context.user._id },
          { $push: { posts: post._id } },
          { new: true }
        );

        return post;
      }
      throw new AuthenticationError("You need to be logged in!");
    },
    addReply: async (parent, { descriptionId, replyBody }, context) => {
      if (context.user) {
        const updatedPost = await Post.findOneAndUpdate(
          { _id: descriptionId },
          {
            $push: { replies: { replyBody, username: context.user.username } },
          },
          { new: true, runValidators: true }
        );

        return updatedPost;
      }

      throw new AuthenticationError("You need to be logged in!");
    },
  },
};

module.exports = resolvers;
