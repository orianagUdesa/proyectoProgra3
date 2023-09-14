import React, { Component } from "react";
import {Link } from "react-router-dom";

class Formulario extends Component {
    constructor(props) {
      super(props)
      this.state = {
        buscador: ""
      }
    }
    
    guardar(event){
        this.setState({
          buscador: event.target.value
        })
      }


    render() {
        return (
            <form onSubmit={fun=>fun.preventDefault()}>
              <input type="text" onChange={(fun)=>this.guardar(fun)} value={this.state.buscador} />
              <button type="submit"><Link to={`/resultadobusqueda/${this.state.buscador}`}>Buscar</Link></button>
            </form>
           );
       
      }
    }
   

export default Formulario;