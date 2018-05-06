import Controller from '@ember/controller';
import { computed } from '@ember/object';

export default Controller.extend({
  filteredConvocatorias: computed('model.convocatories.@each.name', 'query', function() {
    const query = this.get('query');
    if (query && query.length > 0) {
      return this.get('model.convocatories').filterBy('name', query);
    }
    return this.get('model.convocatories');
  }),

  activeUser: computed('model.students.@each.email', function() {
    const email = localStorage.getItem('email');
    if (email && email.length > 0) {
      // console.log(this.get('model.estudiantes').filterBy('email', email).name);
      return this.get('model.students').filterBy('email', email);
    }
  }),

  actions: {
    apply(convocatory){
      const estudiante = this.store.query('students',{
        equalTo: localStorage.getItem('email')
      });
      estudiante.get('convocatories').pushObject(convocatory);
      estudiante.save();
    },

  },
});
