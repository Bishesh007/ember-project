import { module, test } from 'qunit';
import { setupTest } from 'emberjs-tutorial/tests/helpers';

module('Unit | Route | student-forms', function (hooks) {
  setupTest(hooks);

  test('it exists', function (assert) {
    let route = this.owner.lookup('route:student-forms');
    assert.ok(route);
  });
});
