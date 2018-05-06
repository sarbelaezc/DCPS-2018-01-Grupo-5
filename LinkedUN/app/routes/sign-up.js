import Route from '@ember/routing/route';

export default Route.extend({
  actions:{
    signUp(name, email, idNumber, vinculacion, dateOfBirth, password, confirmPassword){
      var validate = validate(name, email, idNumber, vinculacion, dateOfBirth, password, confirmPassword);
      if (validate == true) {
        let ref = this.get('firebaseApp').auth();
        ref.createUserWithEmailAndPassword((email + '@unal.edu.co'), password).then(function (userData){
          this.get('session').open('firebase', {
            provider:'password',
            'email': email + '@unal.edu.co',
            'password': password
          }).then(function(){
            var newStudent = this.store.createRecord('student',{
              uId: userData.uid,
              name: this.name,
              email: this.email + '@unal.edu.co',
              idNumber: this.idNumber,
              dateOfBirth: new Date(this.dateOfBirth),
              password: this.password
            });
              newStudent.save();
          });
        });
        this.transitionToRoute('login');
        CustomAlert('Se ha registrado satisfactoriamente como Estudiante Activo');
      }
    }
  }
});

function validate (name, email, idNumber, vinculacion, dateOfBirth, password, confirmPassword){
  if (name == '' || email == '' || idNumber == '' || dateOfBirth == undefined || dateOfBirth == '' || password == '' || confirmPassword == '') {
    errorCustomAlert('Debes completar todos los campos antes de completar el registro');
    return false;
  }else if (password != confirmPassword) {
      document.getElementById('password').value = "";
      document.getElementById('confirmPassword').value = "";
      errorCustomAlert('Las contraseñas deben coincidir');
      return false;
  }else{
    return true;
  }
}
function CustomAlert(txt) {
  var ALERT_TITLE = "Publicación satisfactoria!";
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
