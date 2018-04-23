import Route from '@ember/routing/route';

export default Route.extend({
  model: function() {
    return {
      users: this.store.findAll('estudiante')
    };
  }
});
