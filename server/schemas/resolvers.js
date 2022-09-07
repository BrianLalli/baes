const { signToken } = require('../utils/auth');
const { User } = require('../models');
const { AuthenticationError } = require('apollo-server-express');
const noteSchema = require('../models/Notes');

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
    updateUser: async (parent, args, context) => {
      if (context.user) {
        return await User.findByIdAndUpdate(context.user._id, args, { new: true });
      }
      throw new AuthenticationError('Not logged in');
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
        const connect = await User.findOne({username: user})
        return User.findOneAndUpdate(
          {_id: context.user._id},
          {$addToSet: {connections: connect._id}},
          {
            new: true,
            runValidators: true,
          }
        )
        .populate('connections')
        //.populate or something
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
    addNote: async (parent, { userId, content }, context) => {
      if (context.user) {
      //  we need to create an object to insert into the users notes array. The object should have a key of content and a value of the actual note. This is because the notes schema has a content property
        return await User.findOneAndUpdate(
          { _id: userId },
          {
            $addToSet: { notes: { content: content } },
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







