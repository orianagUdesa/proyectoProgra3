import React, { Component } from "react";
import {Link } from "react-router-dom";

class Formulario extends Component {
    constructor(props) {
      super(props)
      this.state = {
        buscador: ""
      }
    }
    evitarSubmit(event){
        event.preventDefault()
    }
    guardar(event){
        this.setState({
          busqueda: event.target.value
        })
      }


    render() {
        return (
            <form onSubmit={(event)=>this.evitarSubmit(event)}>
              <input type="text" onChange={(event)=>this.guardar(event)} value={this.state.valor} />
              <input type="submit" value="Submit" />
            </form>
           );
       
      }
    }
   

export default Formulario;