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
    apply(convocatoryId){
      var uid = this.get('session.currentUser.uid');
      var student = this.get('model.students').filterBy('uId',uid);
      var convocatory = this.get('model.convocatories').filterBy('id', convocatoryId);

      this.store.findRecord('student', student[0].id).then(function(student) {
        student.get('convocatories').addObject(convocatory);
        // student.set('convocatories', convocatory);
        student.save();
      });

      this.store.findRecord('convocatory', convocatory[0].id).then(function(convocatory) {
        convocatory.get('students').addObject(student);
        // convocatory.set('students', student);
        convocatory.save();
      });
    },

  },
});
