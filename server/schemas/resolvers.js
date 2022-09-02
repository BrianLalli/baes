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
    
    
    addUser: async (parent, {username, email, password}) => {
      const user = await User.create({username, email, password });
      const token = signToken(user);
      return { token, user };
    },

    updateUser: async(parent, args) => {
      if(context.user) {
        return User.findOneAndUpdate({_id: args.id},args,{new: true}
        //   { 
        //     // username: username,
        //     // email: email,
        //     // password: password,
        //     // allergies: allergies, 
        //     // faveFoods: faveFoods, 
        //     // hateFoods: hateFoods,
        //     // birthday: birthday,
        //     // phobias: phobias,
        //     // hobbies: hobbies, 
        //     // connections: [User]
        // }
        )
      }
    },


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
    removeNote: async (parent, { note }, context) => {
      if (context.user) {
        return User.findOneAndUpdate(
          { _id: context.user._id },
          { $pull: { notes: note } },
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
