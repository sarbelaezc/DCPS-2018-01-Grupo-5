import Route from '@ember/routing/route';

export default Route.extend({
  model: function() {
    return {
      students: this.store.findAll('student'),
      convocatories: this.store.findAll('convocatory'),
    };
  }
});
