import Controller from '@ember/controller';

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
    search(){
      //inserte código de buscar convocatoria
    }
  }
});
