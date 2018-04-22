import Controller from '@ember/controller';

export default Controller.extend({
  actions: {
    cambioVinculacion(vinculacion){
      this.set('vinculacion',vinculacion);
      console.log(this.get('vinculacion'));
    },
    register(name, email, idNumber, vinculacion, dateOfBirth, password, confirmPassword){
      console.log(vinculacion);
      if(vinculacion == 'estudiante'){
        if (name == '' || email == '' || idNumber == '' || dateOfBirth == undefined || password == '' || confirmPassword == '') {
          errorCustomAlert('Debes completar todos los campos antes de completar el registro');
        }else {
          if (password == confirmPassword) {
            var newEstudiante = this.store.createRecord('estudiante',{
              name: this.name,
              email: this.email + '@unal.edu.co',
              idNumber: this.idNumber,
              dateOfBirth: new Date(this.dateOfBirth),
              password: this.password
            });
            console.log(dateOfBirth);
            newEstudiante.save();
            CustomAlert('msgExito');
          }else {
            errorCustomAlert('Las contraseñas deben coincidir');
          }
        }
      }else if (vinculacion == 'profesor') {
        var newProfesor = this.store.createRecord('profesor',{
          name: this.name,
          email: this.email + '@unal.edu.co',
          idNumber: this.idNumber,
          dateOfBirth: new Date(this.dateOfBirth),
          password: this.password
        });
        newProfesor.save();
      }else if (vinculacion == 'administrativo') {
        console.log('not yet');
      }else if (vinculacion == undefined) {
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
