import Route from '@ember/routing/route';

export default Route.extend({
  model: function() {
    return {
      convocatorias: this.store.findAll('convocatoria'),
      estudiantes: this.store.findAll('estudiante')
    };
  }
});
