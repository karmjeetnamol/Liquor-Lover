const { User } = require('../models');

const userData = [
  {
    username: 'test',
    type: 'Bourbon',
    created_at: new Date(),
  },
];

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;