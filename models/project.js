const mongoose = require('mongoose');

const projectSchema = new mongoose.Schema({

  profile: { type: mongoose.Schema.ObjectId, ref: 'Profile' },
  title: { type: String, required: true },
  targetWordCount: Number,
  deadline: Date,
  private: Boolean,
  commentsEnabled: Boolean,
  imgUrl: String
}, { timestamps: true });

module.exports = mongoose.model('Project', projectSchema);
