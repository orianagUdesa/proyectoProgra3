import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import "./formulario.css";

const Formulario = ()=>{
  const [buscador, setBuscador] = useState("");
  const history = useHistory();

  return(
    <form onSubmit={()=>{
      history.push(`/resultadobusqueda/${buscador}`)
    }}>
      <div className="searchContainer">
        <input className="inputSearch" 
          onChange={(event)=> setBuscador(event.target.value)} 
          value={buscador} />

        <button className="buttonSearch" 
          type="submit">
          <i className="bi bi-search"></i>
        </button>
      </div>
  </form>
  )
}

export default Formulario;
