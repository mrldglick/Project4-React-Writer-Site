const mongoose = require('mongoose');

const chapterSchema = new mongoose.Schema({

  project: { type: mongoose.Schema.ObjectId, ref: 'Project' },
  title: String,
  content: String,
  wordCount: Number,
  completed: Boolean,
  commentsEnabled: Boolean,
  imgUrl: String,
  comments: [
    {
      addedBy: { type: mongoose.Schema.ObjectId, ref: 'Profile' },
      content: String
    }
  ]
}, { timestamps: true });

module.exports = mongoose.model('Chapter', chapterSchema);


//
// userSchema.pre('save', function hashPassword(next) {
//   if(this.isModified('password')) {
//     this.password = bcrypt.hashSync(this.password, bcrypt.genSaltSync(8));
//   }
//   next();
// // });
