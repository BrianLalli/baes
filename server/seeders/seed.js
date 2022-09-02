const db = require('../config/connection');
const { User, Notes } = require('../models');
const userSeeds = require('./userSeeds.json');
const noteSchema = require('./noteSeeds.json');

db.once('open', async () => {
  try {
    // await User.deleteMany({});
    await User.create(userSeeds);
    // await noteSchema.create(noteSeeds);

    console.log('all done!');
    process.exit(0);
  } catch (err) {
    throw err;
  }
});
