import Controller from '@ember/controller';
import { action } from '@ember/object';
import { inject as service } from '@ember/service';

export default class StudentFormsController extends Controller {
  @service router;

  studentName = '';
  class = '';
  rollNo = '';
  section = '';
  age = '';
  address = '';
  contactNumber = '';

  @action
  async addStudent(event) {
    event.preventDefault();
    console.log('addStudent');

    const formData = new FormData();
    formData.append('studentName', this.studentName);
    formData.append('class', this.class);
    formData.append('rollNo', this.rollNo);
    formData.append('section', this.section);
    formData.append('age', this.age);
    formData.append('address', this.address);
    formData.append('contactNumber', this.contactNumber);
    //const addedMovie = await this.api.addMovie(formData);
    console.log(formData);

    let newStudent = {
      studentName: this.studentName,
      class: this.class,
      rollNo: this.rollNo,
      section: this.section,
      age: this.age,
      address: this.address,
      contactNumber: this.contactNumber,
    };
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
