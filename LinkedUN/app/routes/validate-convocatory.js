import Route from '@ember/routing/route';

export default Route.extend({
  beforeModel: function() {
    if (!this.get('session.isAuthenticated')) {
      this.transitionTo('login');
    }
  },

  model: function() {
    return {
      convocatories: this.store.findAll('convocatory'),
    };
  },

});
