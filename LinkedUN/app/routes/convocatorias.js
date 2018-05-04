import Route from '@ember/routing/route';

export default Route.extend({
  model: function() {
    return {
      estudiantes: this.store.findAll('estudiante'),
      convocatorias: this.store.findAll('convocatoria'),
    };
  }
});
