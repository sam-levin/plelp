const { User, City, Reply, Post, Location } = require('../models')

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

}
 

module.exports = resolvers;