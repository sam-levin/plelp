const { User, City, Post } = require('../models');
const { AuthenticationError } = require('apollo-server-express');
const { signToken } = require('../utils/auth');

const resolvers = {
    Query: {
      me: async (parent, args, context) => {
        if (context.user) {
          const userData = await User.findOne({ _id: context.user._id })
            .select('-__v -password')
            .populate('posts')
  
          return userData;
        }
  
        throw new AuthenticationError('Not logged in');
      },

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
      },
      
      // finding posts by username
      posts: async (parent, { username }) => {
        const params = username ? { username } : {};
        return Post.find(params).sort({ createdAt: -1 });
      },

      // finding post information by id
      post: async (parent, { _id }) => {
        return Post.findOne({ _id })
            .populate('replies');
      },

      // get all locations for a city
      // locations: async (parent, {city}) => {
      //   const params =  city ? { city } : {}
      //   return Location.find(params).sort({createdAt: -1 });
      // },

      cities: async() => {
        return City.find()
          .select('-__v')
      }
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
      addPost: async (parent, args, context) => {
          if (context.user) {
              const post = await Post.create({ ...args, username: context.user.username });
  
              await User.findByIdAndUpdate(
                  { _id: context.user._id },
                  { $push: { posts: post._id } },
                  { new: true }
                );
        
                return post;
          }
          //throw new AuthenticationError('You need to be logged in!');
  
      },
      addReply: async (parent, { descriptionId, replyBody }, context) => {
          if (context.user) {
            const updatedPost = await Post.findOneAndUpdate(
              { _id: descriptionId },
              { $push: { replys: { replyBody, username: context.user.username } } },
              { new: true, runValidators: true }
            );
    
            return updatedPost;
          }
    
         // throw new AuthenticationError('You need to be logged in!');
        },
  }

}
 

module.exports = resolvers;