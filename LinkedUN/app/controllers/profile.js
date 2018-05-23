import Controller from '@ember/controller';

export default Controller.extend({
  actions: {
    updateProfile(name, email, Id, birthDate, telNum, faculty, career, schedule, percentage, prom, papa){
      var uid = this.get('session.currentUser.uid');

      var student = this.get('model.students').filterBy('uId',uid);
      this.store.findRecord('student', student[0].id).then(function(student){
        student.set('name', name);
        student.set('career', career);
        student.set('dateOfBirth', birthDate);
        student.set('email', email);
        student.set('faculty', faculty);
        student.set('idNumber', Id);
        student.set('pa', prom);
        student.set('papa', papa);
        student.set('percent', percentage);
        student.set('phone', telNum);
        student.set('schedule', schedule);
        student.save();
      });
    },
  },
});
