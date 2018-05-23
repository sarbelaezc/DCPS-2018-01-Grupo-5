import Route from '@ember/routing/route';

export default Route.extend({
  model(){
    var uid = this.get('session.currentUser.uid');
    var students = this.store.query('student',{
      orderBy: 'uId',
      equalTo: uid,
    });
    return students;
  }
});
