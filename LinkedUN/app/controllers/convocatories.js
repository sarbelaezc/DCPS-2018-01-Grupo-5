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
      const student = this.store.query('student',{
        orderBy: 'uId',
        equalTo: this.get('session.currentUser.uid')
      });
      student.get('convocatories').pushObject(convocatory);
      // student.set('convocatories', convocatory);
      student.save();
    },

  },
});
