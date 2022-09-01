const { Schema, model } = require('mongoose');

const noteSchema = new Schema(
  {
    // owner: userId, 
    title: {
      type: String, 
      required: true, 
      
    }, 
    content: {
      type: String, 
      required: true,
       
    },
    date: {
      type: Date, 
      default: Date.now
    },
  }
);

const Note = model('Note', noteSchema);

module.exports = Note; 