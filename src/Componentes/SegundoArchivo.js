import React,{Component} from 'react';
import logo from '../logo.svg';
import {Link} from 'react-router-dom';
import './Style/SegundoArchivo.css';
import NosotrosArchivo from './Nosotros.js'
import DatePicker from'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import { Button } from 'semantic-ui-react';
import { Dropdown } from 'semantic-ui-react';

class SegundoArchivo extends Component {

constructor(){
  super();
  this.state={
    startDate:new Date(),
    opciones:[{key:1, text:'01:30', value:'01:30'},{key:2, text:'03:00', value:'03:00'}],
    masajes:[{key:1, text:'Reflexologia', value:'Reflexologia'},
    {key:2, text:'Relajante', value:'Relajante'},
    {key:3, text:'Tejido Profundo', value:'Tejido Profundo'}],
    opcionSeleccionada:''
  }

}

handleChange=date=>{
  this.setState({
      startDate: date
    });
}

handleOptions=(e,{value})=>{
      this.setState({
        opcionSeleccionada: value
      });

}

handleOptions2=(e,{value})=>{
      this.setState({
        opcionSeleccionada2: value
      });

}


render(){
  return (
    <div className='ContenedorPrincipal'>
      <div className='Header'>

        <div className='Menu'>

            <div className='items'>
              <img src={'/Logo Pequeño.png'} id='imagen-logo'/>
            </div>

          <div className='items'>
            <Link to='./inicial'>
                <p>Inicio</p>
            </Link>
          </div>

          <div className='items' onclick="location.href=#id_Nosotros">
          <a href='#id_Nosotros'>
              <div className='item'>
                <p>Nosotros</p>
              </div>
              </a>
          </div>

          <div className='items'>
            <Link to='./inicial'>
              <div className='item'>
                <p>Contacto</p>
              </div>
            </Link>
          </div>

          <div className='items'>
            <Link to='./inicial'>
              <div className='item'>
                <p>Tienda</p>
              </div>
            </Link>
          </div>

        </div>


          <div className='Texto'>
            <h1>Masajes Lupita</h1>
          </div>

          <div className='Imagen'>
            <img src={'/flor.png'} id='imagen-esquina'/>
          </div>

          <div className='SeleccionFecha'>

          <DatePicker
            selected={this.state.startDate}
            onChange={this.handleChange}
            value={this.state.startDate}/>

          <Dropdown placeholder='State'
          search selection options={this.state.opciones}
          onChange={this.handleOptions}
          value={this.state.opcionSeleccionada}/>

          <Dropdown placeholder='State'
          search selection options={this.state.masajes}
          onChange={this.handleOptions2}
          value={this.state.opcionSeleccionada2}/>

          <button class="ui button" >
            <Link to={{pathname:'/PaginaReserva', aboutProps:{
              dateDatePicker: this.state.startDate,
              options: this.state.opcionSeleccionada,
              options2: this.state.opcionSeleccionada2
            }}}>
            Reservar
            </Link></button>

      </div>



      </div>
      <div className='ArchivoNosotros' id='id_Nosotros'>
      <NosotrosArchivo/>
      </div>
    </div>


  );
}
}

  function handleClick(e){
    e.preventDefault();
    console.log('El boton fue activado')
  }

export default SegundoArchivo;
