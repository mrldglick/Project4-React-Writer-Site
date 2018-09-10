const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const profileSchema = mongoose.Schema({
  username: { type: String, required: true },
  firstName: String,
  lastName: String,
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  profilePicUrl: String
}, { timestamps: true });

//Throw a validation error when duplicate emails are Created
profileSchema.plugin(require('mongoose-unique-validator'));



profileSchema.pre('save', function hashPassword(next) {
  if(this.isModified('password')) {
    this.password = bcrypt.hashSync(this.password, bcrypt.genSaltSync(8));
  }
  next();
});

profileSchema.methods.validatePassword = function validatePassword(password) {
  return bcrypt.compareSync(password, this.password);
};
// profileSchema
//   .virtual('passwordConfirmation')
//   .set(function setPasswordConfirmation(passwordConfirmation) {
//     this._passwordConfirmation = passwordConfirmation;
//   });
//
// profileSchema.pre('validate', function checkPassword(next) {
//   if(!this._passwordConfirmation || this._passwordConfirmation !== this.password) {
//     this.invalidate('passwordConfirmation', 'does not match');
//   }
//   next();
// });
//

module.exports = mongoose.model('Profile', profileSchema);
