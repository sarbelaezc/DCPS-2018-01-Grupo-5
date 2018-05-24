import Controller from '@ember/controller';
import { computed } from '@ember/object';

export default Controller.extend({
  filteredConvocatories: computed('model.convocatories.@each.name', 'query', function() {
    const query = this.get('query');
    if (query && query.length > 0) {
      return this.get('model.convocatories').filterBy('name', query);
    }
    return this.get('model.convocatories');
  }),

  activeUser: computed('model.students.@each', function() {
    return this.get('model.students').filterBy('uId',this.get('session.currentUser.uid'));
  }),

  actions: {
    apply(convocatoryId){
      var uid = this.get('session.currentUser.uid');
      var student = this.get('model.students').filterBy('uId',uid);
      var convocatory = this.get('model.convocatories').filterBy('id', convocatoryId);

      this.store.findRecord('student', student[0].id).then(function(student) {
        student.get('convocatories').forEach((existingConvocatory)=>{
          convocatory.addObject(existingConvocatory);
        });
        student.set('convocatories', convocatory);
        student.save();
      });

      this.store.findRecord('convocatory', convocatory[0].id).then(function(convocatory) {
        var places = convocatory.get('places');
        if (places > 0) {
          convocatory.get('students').forEach((existingStudents)=>{
            student.addObject(existingStudents);
          });

          convocatory.set('students', student);
          convocatory.save();

          CustomAlert('Se ha aplicado a la convocatoria');
        }else {
          errorCustomAlert('No hay puestos disponibles en esta convocatoria');
        }
      });
    },

  },
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
