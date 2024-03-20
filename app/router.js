import EmberRouter from '@ember/routing/router';
import config from 'emberjs-tutorial/config/environment';

export default class Router extends EmberRouter {
  location = config.locationType;
  rootURL = config.rootURL;
}

Router.map(function () {
  this.route('studentsList');
  this.route('studentDetail', { path: '/studentDetail/:student_id' });
  //this.route('not-found', { path: '/*path' });
  this.route('student-forms');
  this.route('student-edit', { path: '/studentEdit/:student_id' });
  this.route('login', { path: '' });
  this.route('register');
});
