const mongoose = require('mongoose');
const Project = require('../models/project');
const User = require('../models/user');
const { dbUri } = require('../config/environment');
mongoose.Promise = require('bluebird');
mongoose.connect(dbUri);

const projectData = [
  {

  }
];
const userData = [
  {
    username: 'Louis',
    email: 'mrldglick@hotmail.com',
    password: 'pass'
  }
];

Project.collection.drop();
User.collection.drop();
User.create(userData)
  .then(users => {
    console.log(`Created ${users.length} users`);
    projectData[0].commments[0].addedBy = users[0]._id;
    projectData[0].commments[1].addedBy = users[1]._id;
    return Project.create(projectData);
  })
  .then(users => console.log(`${users.length} users created`))
  .catch(err => console.log(err))
  .finally(() => mongoose.connection.close());
