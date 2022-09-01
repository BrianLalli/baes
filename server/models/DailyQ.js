const { Schema, model } = require('mongoose');

const QuestionSchema = new Schema(
  {
    questionText: {
      type: String, 
    }
  }
)

const Question = model('Question', QuestionSchema);

module.exports = Question;