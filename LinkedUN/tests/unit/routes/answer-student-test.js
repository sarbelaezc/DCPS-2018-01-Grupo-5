import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | answer-student', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:answer-student');
    assert.ok(route);
  });
});
