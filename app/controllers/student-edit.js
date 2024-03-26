import Controller from '@ember/controller';
import { action } from '@ember/object';
import { inject as service } from '@ember/service';

export default class StudentEditController extends Controller {
  @service router;
  @service api;


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

    // const formData = new FormData();
    // formData.append('id', this.model.id);
    // formData.append('studentName', this.model.userName);
    // formData.append('class', this.model.class);
    // formData.append('rollNo', this.model.rollNo);
    // formData.append('section', this.model.section);
    // formData.append('age', this.model.age);
    // formData.append('address', this.model.address);
    // formData.append('contactNumber', this.model.phoneNumber);

    const studentDetails = {
      id: this.model.id,
      userName: this.model.userName,
      class: this.model.class,
      rollNo: this.model.rollNo,
      section: this.model.section,
      age: this.model.age,
      address: this.model.address,
      phoneNumber: this.model.phoneNumber,
      email: this.model.email,
    };
    const editStudent = await this.api.edit(studentDetails);
    console.log("Student Updated",editStudent.message);

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
