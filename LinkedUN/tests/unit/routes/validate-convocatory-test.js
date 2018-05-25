import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | validate-convocatory', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:validate-convocatory');
    assert.ok(route);
  });
});
