import React, {Component} from 'react';
import {Router, Route, BrowserRouter, Switch, Link} from 'react-router-dom';
import Inicial_class from "../inicial.js";
import SegundoArchivo from "../SegundoArchivo.js";
import NosotrosArchivo from "../Nosotros.js";
import PaginaReserva from "../PaginaReserva.js";

class RouterPrincipal extends Component{
  constructor(){
    super()
  }

  render(){
    return(
      <div>
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={SegundoArchivo}/>
            <Route path="/inicial" component={Inicial_class}/>
            <Route path="/Nosotros" component={NosotrosArchivo}/>
            <Route path="/PaginaReserva" component={PaginaReserva}/>
          </Switch>
          </BrowserRouter>
      </div>
    )
  }
}

export default RouterPrincipal;
