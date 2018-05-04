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

  activeUser: computed('model.estudiantes.@each.email', function() {
    const email = localStorage.getItem('email');
    if (email && email.length > 0) {
      console.log(this.get('model.estudiantes').filterBy('email', email).name);
      return this.get('model.estudiantes').filterBy('email', email);
    }
  }),

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
