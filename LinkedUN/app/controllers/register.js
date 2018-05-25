import Controller from '@ember/controller';
import { inject as service } from '@ember/service';

export default Controller.extend({
  firebaseApp: service(),
    actions: {
      cambioVinculacion(vinculacion){
      this.set('vinculacion',vinculacion);
    },
    register(name, email, idNumber, vinculacion, dateOfBirth, password, confirmPassword){

      var ref = this.get('firebaseApp').auth();

      if(vinculacion == 'estudiante'){
        if (name == '' || email == '' || idNumber == '' || dateOfBirth == undefined || dateOfBirth == '' || password == '' || password == undefined || confirmPassword == '') {
          errorCustomAlert('Debes completar todos los campos antes de completar el registro');
        }else if (password.length < 6) {
          errorCustomAlert('La contraseña debe tener almenos 6 carácteres');
        }else {
          if (password == confirmPassword) {
            ref.createUserWithEmailAndPassword((email + '@unal.edu.co'), password)
              .then((userResponse) =>{
                var newStudent = this.store.createRecord('student',{
                  uId: userResponse.uid,
                  name: this.name,
                  email: userResponse.email,
                  idNumber: this.idNumber,
                  dateOfBirth: this.dateOfBirth,
                  password: this.password
                });
                newStudent.save();
                var newUser = this.store.createRecord('user', {
                    uId: userResponse.uid,
                    isStudent: true,
                  });
                  newUser.save();
                this.transitionToRoute('login');
                this.get('session').close();
                CustomAlert('Se ha registrado satisfactoriamente como Estudiante Activo');
              }).catch(function(){
                errorCustomAlert('Ya existe una cuenta asociada a ese correo electronico');
                document.getElementById('email').value = "";
              }
            );
          }else {
            document.getElementById('password').value = "";
            document.getElementById('confirmPassword').value = "";
            errorCustomAlert('Las contraseñas deben coincidir');
          }
        }
      }else if (vinculacion == 'profesor') {
        if (name == '' || email == '' || idNumber == '' || dateOfBirth == undefined || dateOfBirth == '' || password == '' || password == undefined || confirmPassword == '') {
          errorCustomAlert('Debes completar todos los campos antes de completar el registro');
        }else if (password.length < 6) {
          errorCustomAlert('La contraseña debe tener almenos 6 carácteres');
        }else {
          if (password == confirmPassword) {
            ref.createUserWithEmailAndPassword((email + '@unal.edu.co'), password)
              .then((userResponse) =>{
                var newProfessor = this.store.createRecord('professor',{
                  uId: userResponse.uid,
                  name: this.name,
                  email: userResponse.email,
                  idNumber: this.idNumber,
                  dateOfBirth: this.dateOfBirth,
                  password: this.password
                });
                newProfessor.save();
                var newUser = this.store.createRecord('user', {
                    uId: userResponse.uid,
                    isContractor: true,
                    isProfessor: true
                  });
                  newUser.save();
                this.transitionToRoute('login');
                CustomAlert('Se ha registrado satisfactoriamente como Profesor Vinculado');
              }).catch(function(){
                errorCustomAlert('Ya existe una cuenta asociada a ese correo electronico');
                document.getElementById('email').value = "";
              }
            );
          }else {
            document.getElementById('password').value = "";
            document.getElementById('confirmPassword').value = "";
            errorCustomAlert('Las contraseñas deben coincidir');
          }
        }
      }else if (vinculacion == 'administrativo') {
        if (name == '' || email == '' || idNumber == '' || dateOfBirth == undefined || dateOfBirth == '' || password == '' || password == undefined || confirmPassword == '') {
          errorCustomAlert('Debes completar todos los campos antes de completar el registro');
        }else if (password.length < 6) {
          errorCustomAlert('La contraseña debe tener almenos 6 carácteres');
        }else {
          if (password == confirmPassword) {
            ref.createUserWithEmailAndPassword((email + '@unal.edu.co'), password)
              .then((userResponse) =>{
                var newAdministrative = this.store.createRecord('administrative',{
                  uId: userResponse.uid,
                  name: this.name,
                  email: userResponse.email,
                  idNumber: this.idNumber,
                  dateOfBirth: this.dateOfBirth,
                  password: this.password
                });
                newAdministrative.save();
                var newUser = this.store.createRecord('user', {
                    uId: userResponse.uid,
                    isContractor: true,
                    isAdministrative:true
                  });
                  newUser.save();
                this.transitionToRoute('login');
                CustomAlert('Se ha registrado satisfactoriamente como Profesor Vinculado');
              }).catch(function(){
                errorCustomAlert('Ya existe una cuenta asociada a ese correo electronico');
                document.getElementById('email').value = "";
              }
            );
          }else {
            document.getElementById('password').value = "";
            document.getElementById('confirmPassword').value = "";
            errorCustomAlert('Las contraseñas deben coincidir');
          }
        }
      }else if (vinculacion == undefined || vinculacion == '') {
        errorCustomAlert('Debe seleccionar un tipo de vinculación');
      }
    },
  }
});

// -----------------------------------------------------------------------------
//PopUp
function CustomAlert(txt) {
  var ALERT_TITLE = "Registro satisfactorio!";
  var ALERT_BUTTON_TEXT = "Ok";
  var mObj,alertObj,h1,msg,btn;

  if(document.getElementById("modalContainer")) return;

  mObj = document.getElementsByTagName("body")[0].appendChild(document.createElement("div"));
  mObj.id = "modalContainer";
  mObj.style.height = document.documentElement.scrollHeight + "px";

  alertObj = mObj.appendChild(document.createElement("div"));
  alertObj.id = "alertBox";
  if(document.all && !window.opera) alertObj.style.top = document.documentElement.scrollTop + "px";
  alertObj.style.left = (document.documentElement.scrollWidth - alertObj.offsetWidth)/2 + "px";
  alertObj.style.visiblity="visible";

  h1 = alertObj.appendChild(document.createElement("h2"));
  h1.appendChild(document.createTextNode(ALERT_TITLE));

  msg = alertObj.appendChild(document.createElement("p"));
  //msg.appendChild(document.createTextNode(txt));
  msg.innerHTML = txt;

  btn = alertObj.appendChild(document.createElement("a"));
  btn.id = "Btn";
  btn.appendChild(document.createTextNode(ALERT_BUTTON_TEXT));
  btn.href = "#";
  btn.focus();
  btn.onclick = function() {
    removeCustomAlert();
    return false;
  }
  alertObj.style.display = "block";
}

//PopUp Error
function errorCustomAlert(txt) {
  var ALERT_TITLE = "Error!";
  var ALERT_BUTTON_TEXT = "Ok";
  var mObj,alertObj,h1,msg,btn;

  if(document.getElementById("modalContainer")) return;

  mObj = document.getElementsByTagName("body")[0].appendChild(document.createElement("div"));
  mObj.id = "modalContainer";
  mObj.style.height = document.documentElement.scrollHeight + "px";

  alertObj = mObj.appendChild(document.createElement("div"));
  alertObj.id = "alertBox";
  if(document.all && !window.opera) alertObj.style.top = document.documentElement.scrollTop + "px";
  alertObj.style.left = (document.documentElement.scrollWidth - alertObj.offsetWidth)/2 + "px";
  alertObj.style.visiblity="visible";

  h1 = alertObj.appendChild(document.createElement("h1"));
  h1.appendChild(document.createTextNode(ALERT_TITLE));

  msg = alertObj.appendChild(document.createElement("p"));
  //msg.appendChild(document.createTextNode(txt));
  msg.innerHTML = txt;

  btn = alertObj.appendChild(document.createElement("a"));
  btn.id = "errorBtn";
  btn.appendChild(document.createTextNode(ALERT_BUTTON_TEXT));
  btn.href = "#";
  btn.focus();
  btn.onclick = function() {
    removeCustomAlert();
    return false;
  }
  alertObj.style.display = "block";
}

function removeCustomAlert() {
  document.getElementsByTagName("body")[0].removeChild(document.getElementById("modalContainer"));
}
