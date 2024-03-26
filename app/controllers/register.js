import Controller from '@ember/controller';
import { inject as service } from '@ember/service';
import { action } from '@ember/object';
import config from 'emberjs-tutorial/config/environment';

export default class RegisterController extends Controller {
  @service router;
  api = config.apiUrl;

  studentName = '';
  class = '';
  rollNo = '';
  section = '';
  age = '';
  address = '';
  contactNumber = '';
  email = '';
  password = '';
  errorMessage = null;
  validationErrors = null;

  @action
  async register(event) {
    event.preventDefault();
    console.log('Register');
    this.setProperties({
      errorMessage: null,
      validationErrors: null,
    });

    const newStudent = {
      userName: this.studentName,
      class: this.class,
      rollNo: this.rollNo,
      section: this.section,
      age: this.age,
      address: this.address,
      phoneNumber: this.contactNumber,
      email: this.email,
      password: this.password,
    };

    try {
      const response = await fetch(`${this.api}/api/students/createStudent`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newStudent),
      });
      const result = await response.json();

      if (!result.isSuccess) {
        this.set('errorMessage', result.errorMessage);
        return;
      } else {
        alert(result.message);
        this.setProperties({
          studentName: '',
          class: '',
          rollNo: '',
          section: '',
          age: '',
          address: '',
          contactNumber: '',
        });
        await this.router.transitionTo('login');
      }
    } catch (error) {
      console.error('An unexpected error occurred:', error);
      this.set('errorMessage', 'An unexpected error occurred');
    }
  }
}
