import Controller from '@ember/controller';

export default Controller.extend({
  actions: {
    updateProfile(){
      var uid = this.get('session.currentUser.uid');
      var student = this.get('model.students').filterBy('uId',uid);
      this.store.findRecord('student', student[0].id).then(function(student){
        student.set('name', document.getElementById('name').value);
        student.set('career', document.getElementById('career').value);
        // console.log(document.getElementById('dateOfBirth').value);
        student.set('dateOfBirth', document.getElementById('dateOfBirth').value);
        student.set('email', document.getElementById('email').value);
        student.set('faculty', document.getElementById('faculty').value);
        student.set('idNumber', document.getElementById('idNumber').value);
        student.set('pa', document.getElementById('pa').value);
        student.set('papa', document.getElementById('papa').value);
        student.set('percent', document.getElementById('percent').value);
        student.set('phone', document.getElementById('phone').value);
        student.set('schedule', document.getElementById('schedule').value);
        student.save();
      });
      this.transitionToRoute('convocatories');
    },
  },
});
