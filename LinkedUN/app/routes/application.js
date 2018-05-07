import Route from '@ember/routing/route';
import Ember from 'ember';
export default Route.extend({
  firebaseApp: Ember.inject.service(),
  session: Ember.inject.service(),
  beforeModel: function() {
   return this.get("session").fetch().catch(function() {}); // <--- note that we now return the promise here
 }
});
