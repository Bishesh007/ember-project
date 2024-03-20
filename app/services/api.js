import Service from '@ember/service';

export default class ApiService extends Service 
{

    async fetchData() {
    
        //const jwtToken = localStorage.getItem('token');
        //const userRole = await this.jwtDecoder.decodeToken();
        const header ={
          'accept': '*/*',
          'Authorization': `Bearer ${jwtToken}`,
        };
        let response = await fetch(`${this.api}/Movie/GetAllMovie`, {
          method: 'GET',
          headers: header,
        });
        let data = await response.json();
        return data;
      }
}
