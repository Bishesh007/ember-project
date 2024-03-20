import { module, test } from 'qunit';
import { setupTest } from 'emberjs-tutorial/tests/helpers';

module('Unit | Controller | student-edit', function (hooks) {
  setupTest(hooks);

  // TODO: Replace this with your real tests.
  test('it exists', function (assert) {
    let controller = this.owner.lookup('controller:student-edit');
    assert.ok(controller);
  });
});
