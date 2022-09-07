const { Schema, model } = require('mongoose');
const bcrypt = require('bcrypt');
const noteSchema = require('./Notes');

const userSchema = new Schema({
  username: {
    type: String,
    required: true,
    unique: true,
    trim: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    match: [/.+@.+\..+/, 'Must match an email address!'],
  },
  password: {
    type: String,
    required: true,
    minlength: 8,
  },
  allergies: 
  {
    type: String,
    required: false,
    trim: true,
  },
  hobbies: 
  {
    type: String,
     trim: true,
  },
  faveFoods: 
  {
    type: String,
    required: false,
     trim: true,
  },
  hateFoods: 
  {
    type: String,
    required: false,
     trim: true,
  },
  phobias: 
  {
    type: String,
     trim: true,
  },
  birthday: 
  {
    type: String,
    trim: true,
    required: false,
  },
  //arrays of other users
  //still need to double check connections and notes 
  connections: [
  {
    type: Schema.Types.ObjectId,
    ref: 'User'
  }],
  notes: [noteSchema]
});

userSchema.pre('save', async function (next) {
  if (this.isNew || this.isModified('password')) {
    const saltRounds = 10;
    this.password = await bcrypt.hash(this.password, saltRounds);
  }
  //if new user or modify password then continue to route
  next();
});

userSchema.methods.isCorrectPassword = async function (password) {
  return bcrypt.compare(password, this.password);
};

const User = model('User', userSchema);

module.exports = User;