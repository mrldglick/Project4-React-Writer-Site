const User = require('../models/user');
const jwt = require('jsonwebtoken');
const { secret } = require('../config/environment');



function register(req, res, next) {
  User
    .create(req.body)
    .then(user =>
      createAndSendToken(user, res, `Greetings ${user.username}`))
    .catch(next);
}

function login(req, res, next) {
  User
    .findOne({ email: req.body.email })
    .then(user => {
      if(!user || !user.validatePassword(req.body.password)) {
        return res.status(401).json({ message: 'Unauthorised' });
      }
      createAndSendToken(user, res, `Welcome back ${user.username}`);
    })
    .catch(next);
}
// means you are logged in on registration
function createAndSendToken(user, res, message) {
  const token = jwt.sign({ sub: user._id, username: user.username, admin: false }, secret, { expiresIn: '5hr' });
  res.json({ message, token });
}

module.exports = {
  register,
  login
};
