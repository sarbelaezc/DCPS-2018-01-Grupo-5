import Route from '@ember/routing/route';

export default Route.extend({
  model(){
    var uid = this.get('session.currentUser.uid');
    var user = this.store.query('professor', {orderBy: 'uId', equalTo: uid});
    return user;
  }
});
