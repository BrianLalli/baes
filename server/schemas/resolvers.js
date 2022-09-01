const { signToken } = require('../utils/auth');
const { User } = require('../models');

const resolvers = {
  Query: {
    users: async () => {
      return User.find();
    },

    user: async (parent, { userId }) => {
      return User.findOne({ _id: userId });
    },
    // me: async (parent, args, context) => {
    //   if (context.user) {
    //     return User.findOne({ _id: context.user._id });
    //   }
    //   throw new AuthenticationError('You need to be logged in!');
    // },
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
        throw new AuthenticationError('No user with this email found!');
      }

      const correctPw = await user.isCorrectPassword(password);

      if (!correctPw) {
        throw new AuthenticationError('Incorrect password!');
      }

      const token = signToken(user);
      return { token, user };
    },
    addNote: async (parent, { userId, note }, context) => {
      if (context.person) {
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
    removeNote: async (parent, { note }, context) => {
      if (context.person) {
        return User.findOneAndUpdate(
          { _id: context.person._id },
          { $pull: { notes: note } },
          { new: true }
        );
      }
      throw new AuthenticationError('You need to be logged in!');
    },
    addAllergies: async (parent, { userId, allergy }, context) => {
      if (context.person) {
        return User.findOneAndUpdate(
          { _id: userId },
          {
            $addToSet: { allergies: allergy },
          },
          {
            new: true,
            runValidators: true,
          }
        );
  }
      throw new AuthenticationError('You need to be logged in!');
    },
    removeAllergies: async (parent, { allergy }, context) => {
      if (context.person) {
        return User.findOneAndUpdate(
          { _id: context.person._id },
          { $pull: { allergies: allergy } },
          { new: true }
        );
      }
      throw new AuthenticationError('You need to be logged in!');
    },
    addFaveFoods: async (parent, { userId, faveFood }, context) => {
      if (context.person) {
        return User.findOneAndUpdate(
          { _id: userId },
          {
            $addToSet: { faveFoods: faveFood },
          },
          {
            new: true,
            runValidators: true,
          }
        );
  }
      throw new AuthenticationError('You need to be logged in!');
    },
    removeFaveFoods: async (parent, { faveFood }, context) => {
      if (context.person) {
        return User.findOneAndUpdate(
          { _id: context.person._id },
          { $pull: { faveFoods: faveFood } },
          { new: true }
        );
      }
      throw new AuthenticationError('You need to be logged in!');
    },
    addHateFoods: async (parent, { userId, hateFood }, context) => {
      if (context.person) {
        return User.findOneAndUpdate(
          { _id: userId },
          {
            $addToSet: { hateFoods: hateFood },
          },
          {
            new: true,
            runValidators: true,
          }
        );
  }
      throw new AuthenticationError('You need to be logged in!');
    },
    removeHateFoods: async (parent, { hateFood }, context) => {
      if (context.person) {
        return User.findOneAndUpdate(
          { _id: context.person._id },
          { $pull: { hateFoods: hateFood } },
          { new: true }
        );
      }
      throw new AuthenticationError('You need to be logged in!');
    },
    addPhobias: async (parent, { userId, phobia}, context) => {
      if (context.person) {
        return User.findOneAndUpdate(
          { _id: userId },
          {
            $addToSet: { phobias: phobia },
          },
          {
            new: true,
            runValidators: true,
          }
        );
  }
      throw new AuthenticationError('You need to be logged in!');
    },
    removePhobias: async (parent, { phobia }, context) => {
      if (context.person) {
        return User.findOneAndUpdate(
          { _id: context.person._id },
          { $pull: { phobias: phobia } },
          { new: true }
        );
      }
      throw new AuthenticationError('You need to be logged in!');
    },
    addHobbies: async (parent, { userId, hobby}, context) => {
      if (context.person) {
        return User.findOneAndUpdate(
          { _id: userId },
          {
            $addToSet: { hobbies: hobby},
          },
          {
            new: true,
            runValidators: true,
          }
        );
  }
      throw new AuthenticationError('You need to be logged in!');
    },
    removeHobbies: async (parent, { hobby }, context) => {
      if (context.person) {
        return User.findOneAndUpdate(
          { _id: context.person._id },
          { $pull: { hobbies: hobby } },
          { new: true }
        );
      }
      throw new AuthenticationError('You need to be logged in!');
    },
    //addconnection
    //removeconnection
    //addbirthday
  }};

  module.exports = resolvers;
