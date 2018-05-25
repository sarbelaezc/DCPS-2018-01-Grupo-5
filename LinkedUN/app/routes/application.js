import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default Route.extend({
  firebaseApp: service(),
  session: service(),

  beforeModel: function() {
   return this.get("session").fetch().catch(function() {}); // <--- note that we now return the promise here
  },

  model(){
    var uid = this.get('session.currentUser.uid');
    return this.store.query('user',{
      orderBy: 'uId',
      equalTo: uid,
    });
  },

});
