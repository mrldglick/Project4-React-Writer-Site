const Project = require('../models/project');

function projectsIndex(req, res, next) {
  Project.find()
    .then(projects => res.json(projects))
    .catch(next);
}

function projectsShow(req, res, next) {
  Project.findById(req.params.projectsId)
    .then(project => res.json(project))
    .catch(next);
}

function projectsUpdate(req, res, next) {
  Project.findById(req.params.projectsId)
    .then(project => project.set(req.body))
    .then(project => project.save())
    .then(project => res.json(project))
    .catch(next);
}

function projectsCreate(req, res, next) {
  console.log('req.body is', req.body);
  Project.create(req.body)
    .then(project => res.json(project))
    .catch(next);
}

function projectsDelete(req, res, next) {
  Project.findById(req.params.projectsId)
    .then(project => project.remove())
    .then(() => res.sendStatus(204))
    .catch(next);
}

module.exports = {
  index: projectsIndex,
  show: projectsShow,
  update: projectsUpdate,
  create: projectsCreate,
  delete: projectsDelete
};
