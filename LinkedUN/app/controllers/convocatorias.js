import Controller from '@ember/controller';
import { computed } from '@ember/object';


var effective = false;

export default Controller.extend({
  filteredConvocatorias: computed('model.convocatorias.@each.name', 'query', function() {
  	const query = this.get('query');
    if (query && query.length > 0) {
      return this.get('model.convocatorias').filterBy('name', query);
    }
    return this.get('model.convocatorias');
  }),

  actions: {
    apply(convocatoria){

      const estudiante = this.store.query('estudiante',{
        equalTo: localStorage.getItem('email')
      });
      estudiante.get('convocatorias').pushObject(convocatoria);
      estudiante.save();

    },
    search(query){
      this.get('model.convocatorias').forEach((convocatoria)=>{
        	if (this.query == convocatoria.name) {
          		localStorage.setItem('query', convocatoria.name);
        		effective = true;
          		return true;
        	}
    	})
		if (effective == true) {
			console.log(localStorage.getItem('query'));
			effective = false;
			return false;
		}    
    },
  },
});

/*export function Buscar(query){
	this.get('model.convocatorias').forEach((convocatoria)=>{
        	if (this.query == convocatoria.name) {
          		localStorage.setItem('query', convocatoria.name);
          		console.log(localStorage.getItem('query'));
          		return true;
        	}else{
        		return null;
        	}
    	})
}*/
