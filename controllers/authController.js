const Profile = require('../models/profile');
const jwt = require('jsonwebtoken');
const { secret } = require('../config/environment');



function register(req, res, next) {
  Profile
    .create(req.body)
    .then(profile =>
      createAndSendToken(profile, res, `Greetings ${profile.username}`))
    .catch(next);
}

function login(req, res, next) {
  Profile
    .findOne({ email: req.body.email })
    .then(profile => {
      if(!profile || !profile.validatePassword(req.body.password)) {
        return res.status(401).json({ message: 'Unauthorised' });
      }
      createAndSendToken(profile, res, `Welcome back ${profile.username}`);
    })
    .catch(next);
}
// means you are logged in on registration
function createAndSendToken(profile, res, message) {
  const token = jwt.sign({ sub: profile._id, username: profile.username, admin: false }, secret, { expiresIn: '5hr' });
  res.json({ message, token });
}

module.exports = {
  register,
  login
};
