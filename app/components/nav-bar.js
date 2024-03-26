import Component from '@glimmer/component';
import { inject as service } from '@ember/service';
import { action } from '@ember/object';

export default class NavBarComponent extends Component 
{
    @service router;
    
    @action
    async logout() {  
      localStorage.removeItem('token');
      this.router.transitionTo('login'); 

    }
}
