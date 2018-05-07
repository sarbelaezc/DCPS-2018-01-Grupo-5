import Route from '@ember/routing/route';

export default Route.extend({
  session: Ember.inject.service(),
  beforeModel: function() {
    this.get("session").close();
 },
  model: function() {
    return {
      users: this.store.findAll('student')
    };
  }

});
