import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('register');
  this.route('login');
  this.route('convocatories');
  this.route('publish-convocatory');
  this.route('profile');
  this.route('validate-convocatory');
  this.route('answer-student');
  this.route('convocatory', {path: '/answer-student/convocatory/:id'});
});

export default Router;
