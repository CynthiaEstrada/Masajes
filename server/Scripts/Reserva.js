
function GuardarHora(bd, res, datos){
  var ref=bd.ref('/cita');
  ref.push({
    hora: datos.hora,
    dia:datos.dia,
    tipo:datos.tipo}).then(()=>{res.send('Ok')})
}

function GuardarDia(bd, res, datos){
  var ref=bd.ref('/dia');
  ref.push({dia: datos.dia}).then(()=>{res.send('Ok')})
}

function GuardarTipo(bd, res, datos){
  var ref=bd.ref('/tipo');
  ref.push({masaje: datos.masaje}).then(()=>{res.send('Ok')})
}

function ObtenerHoras(bd, res){
  var ref=bd.ref('/horas');
  var arrayHoras=new Array();
  var promesa = new Promise(function (resolve, reject){
    ref.on('value', snapShot => {
      if(snapShot.exists()){
        snapShot.forEach(function(snap){
          resolve(arrayHoras.push({
            hora: snap.val().hora
          }))

        })
      }
      else{
        resolve()
      }

    })
  })
  promesa.then(function(){
    res.send(arrayHoras)
  })
}
exports.GuardarHora = GuardarHora;
exports.GuardarDia = GuardarDia;
exports.GuardarTipo = GuardarTipo;
exports.ObtenerHoras = ObtenerHoras;
