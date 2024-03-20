import Route from '@ember/routing/route';

export default class StudentsListRoute extends Route {
  async model() {
    return [
      {
        id: 1,
        studentName: 'John Doe',
        class: '10th',
        rollNo: 'A101',
        section: 'A',
        age: 16,
        address: '123 Main St, City',
        contactNumber: '123-456-7890',
      },
      {
        id: 2,
        studentName: 'Jane Smith',
        class: '11th',
        rollNo: 'B202',
        section: 'B',
        age: 17,
        address: '456 Elm St, Town',
        contactNumber: '987-654-3210',
      },
      {
        id: 3,
        studentName: 'Alice Johnson',
        class: '9th',
        rollNo: 'C303',
        section: 'C',
        age: 15,
        address: '789 Oak St, Village',
        contactNumber: '456-789-0123',
      },
      {
        id: 4,
        studentName: 'Bob Williams',
        class: '12th',
        rollNo: 'D404',
        section: 'D',
        age: 18,
        address: '567 Pine St, County',
        contactNumber: '321-987-6543',
      },
    ];
  }
}
