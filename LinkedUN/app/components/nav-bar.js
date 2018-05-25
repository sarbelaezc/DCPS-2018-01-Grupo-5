import Component from '@ember/component';
import { inject as service } from '@ember/service';

export default Component.extend({

  session: service(),

  beforeModel: function() {
   return this.get("session").fetch().catch(function() {}); // <--- note that we now return the promise here
  },

  actions:{
    signOut: function() {
      this.get('session').close();
    },
    responsive() {
      var x = document.getElementById("myTopnav");
      if (x.className === "topnav") {
          x.className += " responsive";
      } else {
          x.className = "topnav";
      }
    },

  },
});
