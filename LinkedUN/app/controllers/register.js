import Controller from '@ember/controller';

export default Controller.extend({
  actions: {
    cambioVinculacion(vinculacion){
      this.set('vinculacion',vinculacion);
      console.log(this.get('vinculacion'));
    },
  }
});
