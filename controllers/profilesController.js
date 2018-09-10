const Profile = require('../models/profile');

function profilesIndex(req, res, next) {
  Profile.find()
    .then(profiles => res.json(profiles))
    .catch(next);
}

function profilesShow(req, res, next) {
  console.log(req.params.profilesId);
  Profile.findById(req.params.profilesId)
    .then(profile => res.json(profile))
    .catch(next);
}

function profilesUpdate(req, res, next) {
  Profile.findById(req.params.profilesId)
    .then(profile => profile.set(req.body))
    .then(profile => profile.save())
    .then(profile => res.json(profile))
    .catch(next);
}



function profilesDelete(req, res, next) {
  Profile.findById(req.params.profilesId)
    .then(profile => profile.remove())
    .then(() => res.sendStatus(204))
    .catch(next);
}

module.exports = {
  index: profilesIndex,
  show: profilesShow,
  update: profilesUpdate,
  delete: profilesDelete
};
