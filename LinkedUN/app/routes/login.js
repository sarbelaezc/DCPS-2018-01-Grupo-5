import Route from '@ember/routing/route';

export default Route.extend({
  model: function() {
    return {
      users: this.store.findAll('estudiante')
    };
  },
  afterModel(model, transition){
  	if (this.controller) {
  		this.transitionTo('convocatorias');
  	}
  }
});
