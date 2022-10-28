const sequelize = require('../config/connection');
const { User } = require('../models');

const userdata = [
  {
    username: 'bobbuilder',
    email: 'bob@yahoo.com',
    password: 'password123'
  },
  {
    username: 'doraexplorer',
    email: 'imthemap@gmail.com',
    password: 'password123'
  },
  {
    username: 'tommy',
    email: 'tommy@aim.com',
    password: 'password123'
  },
  {
    username: 'jeff',
    email: 'jeffsdfgas@aol.com',
    password: 'password123'
  }
];

const seedUsers = () => User.bulkCreate(userdata, {individualHooks: true});

module.exports = seedUsers;
