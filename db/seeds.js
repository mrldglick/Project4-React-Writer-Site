const mongoose = require('mongoose');
const Project = require('../models/project');
const Chapter = require('../models/chapter');
const Profile = require('../models/profile');
const { dbUri } = require('../config/environment');
mongoose.Promise = require('bluebird');
mongoose.connect(dbUri);

const projectData = [
  {
    title: 'Project 1',
    targetWordCount: 30000,
    deadline: new Date('2018/09/20'),
    private: false,
    commentsEnabled: true
  },
  {
    title: 'Project 2',
    targetWordCount: 25000,
    deadline: new Date('2018/09/16'),
    private: false,
    commentsEnabled: false
  },
  {
    title: 'Project 3',
    targetWordCount: 12000,
    deadline: new Date('2018/09/18'),
    private: true,
    commentsEnabled: false
  }
];
const profileData = [
  {
    username: 'Louis',
    email: 'mrldglick@hotmail.com',
    password: 'pass'
  }, {
    username: 'Rob',
    email: 'rob.levy@email.com',
    password: 'pass'
  }, {
    username: 'Boy George',
    email: 'boyg@email.com',
    password: 'pass'
  }
];
const chapterData = [
  {
    title: 'Chapter 1',
    content: 'Once upon a time there was a frog.\n\nThis guy was a total idiot, trust me.',
    completed: true,
    commentsEnabled: true,
    comments: [
      { content: 'Rubbish!' },
      { content: 'Very good indeed' }
    ]
  },
  {
    title: 'Chapter 2',
    content: 'The frog went to town.\n\nStranger things have happened at sea.',
    completed: false,
    commentsEnabled: true,
    comments: [
      { content: 'Rubbish!' },
      { content: 'Very good indeed' }
    ]
  },
  {
    title: 'Chapter 1',
    content: 'This chpater is about a very old banana.\n\nStranger things have happened at grass.',
    completed: false,
    commentsEnabled: true
  }
];

let _profiles;

Chapter.collection.drop();
Project.collection.drop();
Profile.collection.drop();
Profile.create(profileData)
  .then(profiles => {
    _profiles = profiles;
    console.log(`Created ${profiles.length} profiles`);
    projectData[0].profile = profiles[0]._id;
    projectData[1].profile = profiles[1]._id;
    projectData[2].profile = profiles[2]._id;
    return Project.create(projectData);
  })
  .then(projects => {
    console.log(`${projects.length} projects created`);
    chapterData[0].project = projects[0]._id;
    chapterData[1].project = projects[0]._id;
    chapterData[2].project = projects[2]._id;
    chapterData[1].comments[0].addedBy = _profiles[1]._id;
    chapterData[1].comments[1].addedBy = _profiles[2]._id;
    return Chapter.create(chapterData);
  })
  .then(chapters => console.log(`created ${chapters.length} chapters`))
  .catch(err => console.log(err))
  .finally(() => mongoose.connection.close());
