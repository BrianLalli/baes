const { Schema, model } = require('mongoose');

const profileSchema = new Schema({
  name: {
    type: String,
    required: true,
    unique: true,
    trim: true,
  },
  userName: {
    type: String,
    required: true,
    unique: true,
    trim: true,
    validation: {
      minlength: 5,
      maxlength: 20,
    }
  },
  email: [
    {
      email: { type: String, required: true, unique: true, match: [/^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/]},
    },
  ],
  password: {
    
  }
 
});

const Profile = model('Profile', profileSchema);

module.exports = Profile;
