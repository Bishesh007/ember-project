import Controller from '@ember/controller';
import { action } from '@ember/object';
import { inject as service } from '@ember/service';

export default class StudentFormsController extends Controller {
  @service router;
  @service api;

  studentName = '';
  class = '';
  rollNo = '';
  section = '';
  age = '';
  address = '';
  contactNumber = '';
  email ='';

  @action
  async addStudent(event) {
    event.preventDefault();
    console.log('addStudent');

    let studentDetails = {
      userName: this.studentName,
      class: this.class,
      rollNo: this.rollNo,
      section: this.section,
      age: this.age,
      address: this.address,
      phoneNumber: this.contactNumber,
      email: this.email,
    };
    const addStudent = await this.api.add(studentDetails);
    console.log("Student Updated",addStudent.message);

    this.setProperties({
      studentName: '',
      class: '',
      rollNo: '',
      section: '',
      age: '',
      address: '',
      contactNumber: '',
    });

    const result = await addStudent.json();
    alert(result.message);
    await this.router.transitionTo('studentsList');
  }
}
