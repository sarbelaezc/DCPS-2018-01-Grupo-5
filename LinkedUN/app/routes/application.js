import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default Route.extend({
  firebaseApp: service(),
  session: service(),
  
  beforeModel: function() {
   return this.get("session").fetch().catch(function() {}); // <--- note that we now return the promise here
 },

});
