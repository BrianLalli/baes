const { Schema, Types } = require('mongoose');

const noteSchema = new Schema(
  {
    content: String,
}
);


module.exports = noteSchema; 