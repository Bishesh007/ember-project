import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default class StudentsListRoute extends Route {
  @service api;

  async model() {
    return this.api.fetchData();
  }
}
