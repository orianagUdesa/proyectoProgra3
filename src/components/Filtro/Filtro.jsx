import React, {Component} from "react";

class Filtro extends Component {
    constructor(){
        super()
        this.state = {
            input: ""
        }
    }

    filtroEnvio (evento){
        evento.preventDefault(); 
        console.log ("No")
        return True
    }

    guardarDatos (eventoInput){
        this.setState({
            valor: eventoInput.target.value
        }, ()=> console.log (this.state.valor)
        )
    }
    
    render (){
        return(
            <form action="" onSubmit={(e)=>this.filtroEnvio(e)}>
                <label htmlFor="">Filtrar por: </label>
                <input type="text" name="filtro" onChange={(e)=>this.guardarDatos(e)} value={this.state.valor} />
                <button type='submit'>Filtrar</button>
            </form>
        )
    }
}
    
export default Filtro;