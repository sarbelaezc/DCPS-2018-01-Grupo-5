import Controller from '@ember/controller';
import { computed } from '@ember/object';

export default Controller.extend({
  filteredConvocatorias: computed('model.convocatorias.@each.name', 'query', function() {
    const query = this.get('query');
    if (query && query.length > 0) {
      return this.get('model.convocatorias').filterBy('name', query);
    }
    return this.get('model.convocatorias');
  }),

  // activeUser: this.get('model.estudiantes').filterBy('email', localStorage.getItem('email')),

  actions: {
    apply(convocatoria){
      const estudiante = this.store.query('estudiante',{
        equalTo: localStorage.getItem('email')
      });
      estudiante.get('convocatorias').pushObject(convocatoria);
      estudiante.save();
    },

  },
});
