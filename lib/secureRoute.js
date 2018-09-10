const jwt = require('jsonwebtoken');
const { secret } = require('../config/environment');
const Promise = require('bluebird');
const Profile = require('../models/profile');

function secureRoute(req, res, next) {
  if(!req.headers.authorization) return res.status(401).json({ message: 'Unauthorized' });

  const token = req.headers.authorization.replace('Bearer ', '');

  new Promise((resolve, reject) => {
    jwt.verify(token, secret, (err, payload) => {
      if(err) return reject(err);
      resolve(payload);
    });
  })
    .then(payload => Profile.findById(payload.sub))
    .then(profile => {
      if(!profile) return res.status(401).json({ message: 'Unauthorized' });
      req.currentProfile = profile;
      next();
    })
    .catch(next);
}

module.exports = secureRoute;
