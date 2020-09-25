import React,{Component} from 'react';
import './Style/PaginaReserva.css';
import {Link} from 'react-router-dom';
import axios from 'axios';
import {DireccionServer} from '../Variables.js';
import { Dropdown } from 'semantic-ui-react';
import { Input } from 'semantic-ui-react';

class PaginaReserva extends Component{

constructor(props){
  super()

  this.state={
    hora: props.location.aboutProps !== undefined ? props.location.aboutProps.options : 'none',
    masaje: props.location.aboutProps !== undefined ? props.location.aboutProps.options2 : 'none',
    fecha: props.location.aboutProps !== undefined ? props.location.aboutProps.dateDatePicker : 'none',
    opciones: [{key:1, text:'Femenino', value:'f'}, {key:1, text:'Masculino', value:'m'}, {key:3, text:'Otro', value:'undefined'}],
    arrayho: new Array(),
    nombre:'', apellido:'', edad:'', sexo:'', numero:'', correo:''

  }
}


handleChange=(e,{value})=>{
  this.setState({
      sexSelection: value
    });
}

componentDidMount(){
  axios.post(DireccionServer+`/obtenerhoras`,{})
  .then(res => {
    let respuesta=res.data;
    console.log(respuesta);
    this.setState({
      arrayho: respuesta
    })
});
}

GuardarCita =() => {
  axios.post(DireccionServer+`/guardarhora`,{
    hora:this.state.hora,
    dia:this.state.fecha,
    tipo:this.state.masaje,
    nombre:this.state.nombre,
    apellido:this.state.apellido,
    edad:this.state.edad,
    sexo:this.state.sexSelection,
    numero:this.state.numero,
    correo:this.state.correo
  })
  .then(res => {
    let respuesta=res.data;
    if(respuesta=='Ok'){
      alert('se registró correctamente');
    }
});
}

ChangeState =(nom, ape, ed, num, corr)=>{

  this.setState({
    nombre: nom,
    apellido:ape,
    edad:ed,
    numero:num,
    correo:corr
  });
}

TomarDatos=() => {
  var nom = document.getElementById('inputNombre').value;
  var ape = document.getElementById('inputApellido').value;
  var ed = document.getElementById('inputEdad').value;
  var num = document.getElementById('inputNumero').value;
  var corr = document.getElementById('inputEmail').value;

  this.ChangeState(nom, ape, ed, num, corr);
  console.log(this.state.nombre, this.state.apellido, this.state.edad, this.state.numero, this.state.correo);
  this.GuardarCita();

}
render(){
  return(
    <div className="ContenedorReserva">
      <div className="Formulario">
      <div className="DatosPersonales">

      <p>Nombre</p>
      <Input placeholder='Nombre' type='text'
      id='inputNombre'/>

      <p>Apellido</p>
      <Input placeholder='Apellido' type='text'
      id='inputApellido'/>

      <p>Edad</p>
      <Input placeholder='Edad' type='text'
      id='inputEdad'/>

      <p>Sexo</p>

      <Dropdown placeholder='Sexo'
      search selection options={this.state.opciones}
      onChange={this.handleChange}
      value={this.state.sexSelection}/>

      <p>Numero de Contacto</p>
      <Input placeholder='(000) 000 0000)' type='tel'
      id='inputNumero'/>

      <p>Correo</p>
      <Input placeholder='correo@dominio.com' type='email'
      id='inputEmail'/>

      <button onClick={this.TomarDatos}>Prueba</button>
      </div>
      </div>

      <h1>{this.state.hora}</h1>
      <h1>{this.state.masaje}</h1>
      {console.log(this.state.fecha)}
      <h1>{this.state.fecha.toString()}</h1>

      <div className ='HeaderReserva'>
      <button onClick={this.GuardarCita}>Aceptar</button>

      <div className= 'ListaHoras'>
      {
        this.state.arrayho.map((it)=>{
          return(<MostrarHoras valores={it}/>)
        })
      }
      </div>

      </div>
    </div>

  );
}
}

class MostrarHoras extends Component{

constructor(props){
  super(props)
}
render(){
  console.log(this.props)
    return(
    <p>{this.props.valores.hora}</p>
  );
}
}

export default PaginaReserva;
