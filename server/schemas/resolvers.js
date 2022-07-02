const { AuthenticationError } = require('apollo-server-express');
const { User, Post } = require('../models');
const { signToken } = require('../utils/auth');

const resolvers = {
    
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