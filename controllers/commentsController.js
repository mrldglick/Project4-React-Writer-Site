const Chapter = require('../models/chapter');

function commentsCreate(req, res, next) {
  Chapter.findById(req.params.chapterId)
    .then(chapter => {
      chapter.comments.push(req.body);
      return chapter.save();
    })
    .then(chapter => res.json(chapter))
    .catch(next);
}

function commentsUpdate(req, res, next) {
  Chapter.findById(req.params.chapterId)
    .then(chapter => {
      chapter.comments.id(req.params.commentId).set(req.body);
      return chapter.save();
    })
    .then(chapter => res.json(chapter))
    .catch(next);
}

function commentsDelete(req, res, next) {
  Chapter.findById(req.params.chapterId)
    .then(chapter => {
      chapter.comments.id(req.params.commentId).remove();
      return chapter.save();
    })
    .then(chapter => res.json(chapter))
    .catch(next);
}

module.exports = {
  create: commentsCreate,
  delete: commentsDelete,
  update: commentsUpdate
};
