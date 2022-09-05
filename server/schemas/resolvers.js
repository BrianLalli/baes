const { signToken } = require('../utils/auth');
const { User } = require('../models');
const { AuthenticationError } = require('apollo-server-express');


const resolvers = {
  Query: {
    users: async () => {
      return User.find();
    },

    user: async (parent, { userId }) => {
      return User.findOne({ _id: userId });
    },
    me: async (parent, args, context) => {
      if (context.user) {
        const meData = await User.findOne({ _id: context.user._id })
        .select('-__v -password')
        .populate('connections');
        return meData;
      }
      throw new AuthenticationError('You need to be logged in!');
    },
  },

  Mutation: {
    login: async (parent, { email, password }) => {
      const user = await User.findOne({ email });

      if (!user) {
        throw new AuthenticationError('No user with this email found!');
      }

      const correctPw = await user.isCorrectPassword(password);

      if (!correctPw) {
        throw new AuthenticationError('Incorrect password!');
      }

      const token = signToken(user);
      return { token, user };
    },
    
    
    addUser: async (parent, args) => {
      const user = await User.create(args);
      const token = signToken(user);
      return { token, user };
    },

<<<<<<< Updated upstream
    updateUser: async(parent, args, context) => {
      // console.log("context.user", context.user);
      // console.log("args", args);
      if(context.user) {
        return User.findOneAndUpdate({_id: args.user._id},args.user,{new: true}
        ) 
      }
=======
    updateUser: async(parent, args) => {
      // if(context.user) {
        return User.findOneAndUpdate({_id: args.user._id},args.user,{new: true}
        )
      // }
>>>>>>> Stashed changes
    },

    deleteUser: async(parent, args, context) => {
      if(context.user) {
        return User.deleteOne({_id: context.user._id})
      }
      throw new AuthenticationError('You need to be logged in!');
    },

    // addconnection
    // add by id, remove from set: connection
    addConnection: async(parent, {user}, context) => {
      if(context.user) {
        return User.findOneAndUpdate(
          {_id: context.user._id},
          {$addToSet: {connections: user}},
          {
            new: true,
            runValidators: true,
          }
        );
      }
    },

    // remove a connection
    deleteConnection: async(parent, {user}, context) => {
      if(context.user) {
      return User.findOneAndUpdate(
        { _id: context.user._id },
        { $pull: { connections: user } },
        { new: true,
          runValidators: true,
        }
      );
    }
  },
    // remove by id, remove from set: connection


    addNote: async (parent, { userId, note }, context) => {
      if (context.user) {
        return User.findOneAndUpdate(
          { _id: userId },
          {
            $addToSet: { notes: note },
          },
          {
            new: true,
            runValidators: true,
          }
        );
  }
      throw new AuthenticationError('You need to be logged in!');
    },


    // update note
    updateNote: async (parent, { note }, context) => {
      if (context.user) {
        return User.findOneAndUpdate(
          { _id: context.user._id },
          { $pull: { notes: note } }
          // { new: true }
        );
      }
      throw new AuthenticationError('You need to be logged in!');
    },


    removeNote: async (parent, { note }, context) => {
      if (context.user) {
        return User.deleteOne(
          { _id: context.user._id },
          { $pull: { notes: note } },
          { new: true }
        );
      }
      throw new AuthenticationError('You need to be logged in!');
    },
   
    //addbirthday
  }};

  module.exports = resolvers;
