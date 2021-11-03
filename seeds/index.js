const blogSeed = require('./blogSeed');
const commentSeed = require('./commentSeed');
const userSeed = require('./userSeed');
const sequelize = require('../config/connection');

const seedAll = async () => {
  await sequelize.sync({ force: true });
  await blogSeed();
  await commentSeed();
  await userSeed();
  process.exit(0);
};

seedAll();