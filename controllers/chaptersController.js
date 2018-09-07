const Chapter = require('../models/chapter');

function chaptersIndex(req, res, next) {
  Chapter.find({ project: req.params.projectId })
    .then(chapters => res.json(chapters))
    .catch(next);
}

function chaptersShow(req, res, next) {
  Chapter.findById(req.params.id)
    .then(chapter => res.json(chapter))
    .catch(next);
}

function chaptersUpdate(req, res, next) {
  Chapter.findById(req.params.id)
    .then(chapter => chapter.set(req.body))
    .then(chapter => chapter.save())
    .then(chapter => res.json(chapter))
    .catch(next);
}

function chaptersCreate(req, res, next) {
  console.log('req.body is', req.body);
  Chapter.create(req.body)
    .then(chapter => res.json(chapter))
    .catch(next);
}

function chaptersDelete(req, res, next) {
  Chapter.findById(req.params.id)
    .then(chapter => chapter.remove())
    .then(() => res.sendStatus(204))
    .catch(next);
}

module.exports = {
  index: chaptersIndex,
  show: chaptersShow,
  update: chaptersUpdate,
  create: chaptersCreate,
  delete: chaptersDelete
};
