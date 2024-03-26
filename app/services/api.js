import Service from '@ember/service';
import { inject as service } from '@ember/service';
import fetch from 'fetch';
import config from 'emberjs-tutorial/config/environment';

export default class ApiService extends Service {
  api = config.apiUrl;

  async fetchData() {
    const jwtToken = localStorage.getItem('token');
    const header = {
      accept: '*/*',
      Authorization: `Bearer ${jwtToken}`,
    };
    let response = await fetch(`${this.api}/api/students/getStudents`, {
      method: 'GET',
      headers: header,
    });
    let data = await response.json();
    return data;
  }
  async add(studentDetails) {
    const jwtToken=localStorage.getItem('token');
    const header = {
      'accept': '*/*',
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${jwtToken}`,
    };
    const response = await fetch(`${this.api}/api/students/addStudent`, {
      method: 'POST',
      headers:header,
      body: JSON.stringify(studentDetails),
      
    });
    return response;
  }

  async edit(studentDetails) {
    const jwtToken = localStorage.getItem('token');
    //const userRole = await this.jwtDecoder.decodeToken();
    const header ={
      'accept': '*/*',
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${jwtToken}`,
    };
    const response = await fetch(`${this.api}/api/students/updateStudent`, {
      method: 'POST',
      headers: header,
      body: JSON.stringify(studentDetails),
    });
    return response;
  }
  async delete(id) {
    const jwtToken = localStorage.getItem('token');
    const userRole = await this.jwtDecoder.decodeToken();
    const header ={
      'accept': '*/*',
      'Authorization': `Bearer ${jwtToken}`,
    };
    const response = await fetch(`${this.api}/api/students/deleteStudent?id=${id}`, {
      method: 'Delete',
      headers: header,
    });
    return response;
  }

}
