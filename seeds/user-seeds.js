const { User } = require('../models');

const userData = [
  {
    username: 'test',
    type: 'Bourbon',
    created_at: new Date(),

  },

 
];

const seedUsers = () => Users.bulkCreate(userData);

module.exports = seedUsers;