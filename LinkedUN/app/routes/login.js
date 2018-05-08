import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default Route.extend({
  session: service(),

  beforeModel: function() {
    this.get("session").close();
  },

  model: function() {
    return {
      users: this.store.findAll('student')
    };
  },

});
