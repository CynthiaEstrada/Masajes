
function GuardarHora(bd, res, datos){
  var ref=bd.ref('/horas');
  ref.push({hora: datos.hora}).then(()=>{res.send('Ok')})
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
exports.ObtenerHoras = ObtenerHoras;
