import Controller from '@ember/controller';

export default Controller.extend({
  actions: {
    cambioVinculacion(vinculacion){
      this.set('vinculacion',vinculacion);
      console.log(this.get('vinculacion'));
    },
    register(name, email, idNumber, vinculacion, dateOfBirth, password, confirmPassword){
      if(vinculacion == 'estudiante'){
        var newEstudiante = this.store.createRecord('estudiante',{
          name: this.name,
          email: this.email + '@unal.edu.co',
          idNumber: this.idNumber,
          dateOfBirth: new Date(this.dateOfBirth),
          password: this.password
        });
        newEstudiante.save();
      }
    },
  }
});
