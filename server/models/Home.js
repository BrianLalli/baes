const { Schema, model } = require('mongoose');

const homeSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true,
        trim: true,
      },
      firstName:
      {
        type: String,
        required: true,
      },
      lastName:
      {
        type: String,
        required: true,
      },
      connections: [
        {
          type: Schema.Types.ObjectId,
          ref: 'User'
        }
      ],
    lastAccessed: {type: Date, default: Date.now},
});

const getStarted = mongoose.model('Get Started', homeSchema);

const handleError = (err) => console.error(err);

const Home = model('Home', homeSchema);

module.exports = Home;