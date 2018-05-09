import Route from '@ember/routing/route';

export default Route.extend({
  beforeModel: function() {
    if (!this.get('session.isAuthenticated')) {
      this.transitionTo('login');
    }
  },

  model: function() {
    return {
      students: this.store.findAll('student'),
      convocatories: this.store.findAll('convocatory'),
    };
  },

});
