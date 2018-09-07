const express = require('express');
const Router = express.Router();
const secureRoute = require('../lib/secureRoute');

const projectsController = require('../controllers/projectsController');
const chaptersController = require('../controllers/chaptersController');
const authController = require('../controllers/authController');
const commentsController = require('../controllers/commentsController');


Router.route('/')
  .get(function(req, res) {
    res.send('Welcome to Express');
  });

Router.route('/login')
  .post(authController.login);

Router.route('/register')
  .post(authController.register);

Router.route('/projects')
  .get(projectsController.index)
  .post(secureRoute, projectsController.create);

Router.route('/projects/:id')
  .get(projectsController.show)
  .put(secureRoute, projectsController.update)
  .delete(secureRoute, projectsController.delete);


Router.route('/projects/:id/chapters')
  .get(chaptersController.index)
  .post(secureRoute, chaptersController.create);

Router.route('/projects/:id/chapters/:id')
  .get(chaptersController.show)
  .put(secureRoute, chaptersController.update)
  .delete(secureRoute, chaptersController.delete);

Router.route('/projects/:id/chapters/:id/comments')
  .post(commentsController.create);

Router.route('/projects/:id/chapters/:id/comments/:commentId')
  .put(commentsController.update)
  .delete(commentsController.delete);

// Is 'tagId' necessary syntax

// Router.route('/films/:filmId/tags/:tagId')
//   .put(tagsController.update)
//   .delete(tagsController.delete);


module.exports = Router;
