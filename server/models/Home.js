const { Schema, model } = require('mongoose');

const homeSchema = new mongoose.Schema({
    user: {},
    lastAccessed: {type: Date, default: Date.now},
});

const getStarted = mongoose.model('Get Started', homeSchema);

const handleError = (err) => console.error(err);


module.exports = ;
