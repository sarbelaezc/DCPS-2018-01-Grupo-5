import Controller from '@ember/controller';

export default Controller.extend({
  actions: {
    publish(department, name, career, places, hourlyintensity, bonding_time, remuneration, required_percent, activities, site, schedule){
      if (department==''||name==''||career==''||places==''||hourlyintensity==''||bonding_time==''||remuneration==''||required_percent==''||activities==''||site==''||schedule==''||schedule==undefined) {
        errorCustomAlert('Debes completar todos los campos antes de completar la publicación');
      }else {
        var newConvocatoria = this.store.createRecord('convocatoria',{
          department: this.department,
          name: this.name,
          career: this.career,
          places: this.places,
          hourlyintensity: this.hourlyintensity,
          bonding_time: this.bonding_time,
          remuneration: this.remuneration,
          required_percent: this.required_percent,
          activities: this.activities,
          site: this.site,
          schedule: this.schedule
        });
        newConvocatoria.save();
        CustomAlert('Se ha publicado satisfactoriamente la convocatoria, espere la validación de un adminsitrativo')
      }
    }
  }
});

// -----------------------------------------------------------------------------
//PopUp
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