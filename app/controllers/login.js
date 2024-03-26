import Controller from '@ember/controller';
import { action } from '@ember/object';
import { inject as service } from '@ember/service';
import config from 'emberjs-tutorial/config/environment';

export default class LoginController extends Controller {
  @service router;

  api = config.apiUrl;
  username = '';
  password = '';
  errorMessage = null;
  validationErrors = null;

  @action
  async login(event) {
    event.preventDefault();

    // Clear previous error messages
    this.setProperties({
      errorMessage: null,
      validationErrors: null,
    });

    const requestData = {
      username: this.username,
      password: this.password,
    };

    try {
      const response = await fetch(
        `${this.api}/api/students/authenticateStudent`,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(requestData),
        },
      );

      if (!response.ok) {
        const errorData = await response.json();
        if (errorData.errors) {
          this.set('validationErrors', errorData.errors);
        } else {
          this.set('errorMessage', errorData.message);
        }
        return;
      }

      const data = await response.json();
      alert(data.message);
      console.log('Response:', data);
      localStorage.setItem('token', data.token);

      setTimeout(() => {
        localStorage.removeItem('token');
        this.router.transitionTo('');
      }, 1000000); // millisecond

      this.router.transitionTo('studentsList');
    } catch (error) {
      console.error('An unexpected error occurred:', error);
      this.set('errorMessage', 'An unexpected error occurred');
    }

    this.setProperties({
      username: '',
      password: '',
    });
  }
}
