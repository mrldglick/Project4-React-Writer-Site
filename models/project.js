const mongoose = require('mongoose');

const projectSchema = new mongoose.Schema({

  user: { type: mongoose.Schema.ObjectId, ref: 'User' },
  title: { type: String, required: true },
  targetWordCount: Number,
  deadline: Date,
  private: Boolean,
  commentsEnabled: Boolean,
  imgUrl: String
}, { timestamps: true });

module.exports = mongoose.model('Project', projectSchema);
