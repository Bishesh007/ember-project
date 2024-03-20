import { module, test } from 'qunit';
import { setupTest } from 'emberjs-tutorial/tests/helpers';

module('Unit | Route | studentDetail', function (hooks) {
  setupTest(hooks);

  test('it exists', function (assert) {
    let route = this.owner.lookup('route:student-detail');
    assert.ok(route);
  });
});
