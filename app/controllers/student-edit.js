import Controller from '@ember/controller';
import { action } from '@ember/object';
import { inject as service } from '@ember/service';

export default class StudentEditController extends Controller {
  @service router;

  studentName = '';
  class = '';
  rollNo = '';
  section = '';
  age = '';
  address = '';
  contactNumber = '';

  @action
  async editStudent(event) {
    event.preventDefault();
    console.log('EditStudent');

    const formData = new FormData();
    formData.append('studentName', this.model.studentName);
    formData.append('class', this.model.class);
    formData.append('rollNo', this.model.rollNo);
    formData.append('section', this.model.section);
    formData.append('age', this.model.age);
    formData.append('address', this.model.address);
    formData.append('contactNumber', this.model.contactNumber);
    //const addedMovie = await this.api.addMovie(formData);
    console.log(formData);

    this.setProperties({
      studentName: '',
      class: '',
      rollNo: '',
      section: '',
      age: '',
      address: '',
      contactNumber: '',
    });
    await this.router.transitionTo('studentsList');
  }
}
