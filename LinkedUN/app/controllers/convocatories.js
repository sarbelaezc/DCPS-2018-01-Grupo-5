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

  activeUser: computed('model.students.@each', function() {
    return this.get('model.students').filterBy('uId',this.get('session.currentUser.uid'));
  }),

  actions: {
    apply(convocatory){
      const student = this.store.query('student',{
        orderBy: 'uId',
        equalTo: this.get('session.currentUser.uid')
      });
      console.log(this.get('session.currentUser.uid'));
      console.log(this.activeUser);
      console.log(this.activeUser._internalModel.__data.uId);
      student.get('convocatories').pushObject(convocatory);
      // student.set('convocatories', convocatory);
      student.save();
    },

  },
});
