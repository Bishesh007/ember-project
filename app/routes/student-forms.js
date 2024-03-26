import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';


export default class StudentFormsRoute extends Route {
    @service router;
    beforeModel() {
        const token = localStorage.getItem('token');
        if (!token) {
            alert("error");
            this.router.transitionTo("not-found");
        }
    }
}
