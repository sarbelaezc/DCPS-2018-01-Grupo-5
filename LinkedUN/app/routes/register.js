import Route from '@ember/routing/route';

export default Route.extend({
  beforeModel:function() {
    if (this.get('session.isAuthenticated')) {
      this.transitionTo('index');
    }
  },

  model: function() {
    return {
      users: this.store.findAll('user')
    };
  }
});
