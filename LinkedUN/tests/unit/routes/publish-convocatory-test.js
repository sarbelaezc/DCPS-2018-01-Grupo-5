import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | publish-convocatory', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:publish-convocatory');
    assert.ok(route);
  });
});
