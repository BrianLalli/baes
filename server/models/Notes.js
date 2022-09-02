const { Schema, Types } = require('mongoose');

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
      type: String
    },
  }
);


module.exports = noteSchema; 