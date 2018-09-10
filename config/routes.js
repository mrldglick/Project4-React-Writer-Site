const express = require('express');
const Router = express.Router();
const secureRoute = require('../lib/secureRoute');

const profilesController = require('../controllers/profilesController');
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


Router.route('/profiles')
  .get(profilesController.index);

Router.route('/profiles/:profilesId')
  .get(profilesController.show)
  .put(secureRoute, profilesController.update)
  .delete(secureRoute, profilesController.delete);

Router.route('/profiles/:profilesId/projects')
  .get(projectsController.index)
  .post(secureRoute, projectsController.create);

Router.route('/profiles/:profilesId/projects/:projectsId')
  .get(projectsController.show)
  .put(secureRoute, projectsController.update)
  .delete(secureRoute, projectsController.delete);


Router.route('/profiles/:profilesId/projects/:projectsId/chapters')
  .get(chaptersController.index)
  .post(secureRoute, chaptersController.create);

Router.route('/profiles/:profilesId/projects/:projectsId/chapters/:id')
  .get(chaptersController.show)
  .put(secureRoute, chaptersController.update)
  .delete(secureRoute, chaptersController.delete);

Router.route('/profiles/:profilesId/projects/:projectsId/chapters/:chaptersId/comments')
  .post(commentsController.create);

Router.route('/profiles/:profilesId/projects/:projectsId/chapters/:chaptersId/comments/:commentId')
  .put(commentsController.update)
  .delete(commentsController.delete);




module.exports = Router;
