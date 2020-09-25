import React, {Component} from 'react';
import {Router, Route, BrowserRoyter, Switch, Link} from 'react-router-dom'

class Inicial_class extends Component{
  constructor(){
    super()
  }

  render(){
    return(
      <div>
        <h2>Segunda Pagina</h2>
        <p>Texto cualquiera de parrafo</p>
      </div>
    )
  }
}

export default Inicial_class;
