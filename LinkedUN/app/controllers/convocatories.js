import Controller from '@ember/controller';
import { computed } from '@ember/object';

export default Controller.extend({
  filteredConvocatories: computed('model.convocatories.@each.name', 'query', function() {
    const query = this.get('query');
    if (query && query.length > 0) {
      return this.get('model.convocatories').filterBy('name', query);
    }
    return this.get('model.convocatories');
  }),

  actions: {
    apply(convocatory){
      const estudiante = this.store.query('student',{
        equalTo: localStorage.getItem('email')
      });
      estudiante.get('convocatories').pushObject(convocatory);
      estudiante.save();
    },

  },
});
