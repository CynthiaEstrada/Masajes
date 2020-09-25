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
    arrayho: new Array()

  }
}

handleChange=value=>{
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

GuardarHora =() => {
  axios.post(DireccionServer+`/guardarhora`,{hora:this.state.hora})
  .then(res => {
    let respuesta=res.data;
    if(respuesta=='Ok'){
      alert('se registró correctamente');
    }
});
}

render(){
  return(
    <div className="ContenedorReserva">
      <div className="Formulario">
      <div className="DatosPersonales">

      <p>Nombre</p>
      <Input placeholder='Nombre' type='text'
      value={this.state.nombre}/>

      <p>Apellido</p>
      <Input placeholder='Apellido' type='text'
      value={this.state.apellido}/>

      <p>Edad</p>
      <Input placeholder='Edad' type='text'
      value={this.state.edad}/>

      <p>Sexo</p>

      <Dropdown placeholder='Sexo'
      search selection options={this.state.opciones}
      onChange={this.handleOptions}
      value={this.state.opcionSeleccionada}/>

      <p>Numero de Contacto</p>
      <Input placeholder='Numero Telefonico' type='text'
      value={this.state.numero}/>

      <p>Correo</p>
      <Input placeholder='correo@dominio.com' type='email'
      value={this.state.correo}/>

      </div>
      </div>

      <h1>{this.state.hora}</h1>
      <h1>{this.state.masaje}</h1>
      {console.log(this.state.fecha)}
      <h1>{this.state.fecha.toString()}</h1>

      <div className ='HeaderReserva'>
      <button onClick={this.GuardarHora}>Aceptar</button>

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
