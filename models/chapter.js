const mongoose = require('mongoose');

const chapterSchema = new mongoose.Schema({

  project: { type: mongoose.Schema.ObjectId, ref: 'Project' },
  title: String,
  wordCount: Number,
  completed: Boolean,
  commentsEnabled: Boolean,
  imgUrl: String,
  comments: [
    {
      addedBy: { type: mongoose.Schema.ObjectId, ref: 'User' },
      commentName: String
    }
  ]
}, { timestamps: true });

module.exports = mongoose.model('Chapter', chapterSchema);
