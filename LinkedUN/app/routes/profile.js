import Route from '@ember/routing/route';

export default Route.extend({
  model(){
    var uid = this.get('session.currentUser.uid');

    return{
      actualStudent : this.store.query('student',{
        orderBy: 'uId',
        equalTo: uid,
      }),
      students: this.store.findAll('student'),
    };
  },
});
