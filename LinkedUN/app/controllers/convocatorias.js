import Controller from '@ember/controller';


var effective = false;

export default Controller.extend({
  actions: {
    apply(name){
      var model = this.get('model');

      var estudiante = model.store.query('estudiante',{
        equalTo: localStorage.getItem('email')
      });

      estudiante.set({
         convocatoria: name
      });
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
