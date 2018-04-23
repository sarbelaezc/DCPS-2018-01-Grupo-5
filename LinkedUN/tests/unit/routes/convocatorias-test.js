import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | convocatorias', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:convocatorias');
    assert.ok(route);
  });
});
