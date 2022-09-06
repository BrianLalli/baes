const { Schema, Types } = require('mongoose');

const noteSchema = new Schema(
  {
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