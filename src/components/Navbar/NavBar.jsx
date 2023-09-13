import React from "react";
import { Link } from "react-router-dom";

function Navbar (){
    return (
        <nav>
            <ul className="barra principal">
                <li><Link to="/"> Home</Link></li>
                <li><Link to="/favoritos"> Favoritos</Link></li> 
                <li><Link to="/"></Link></li> //nombre del link
            </ul>
            <ul></ul>
        </nav>
    )
}

export default Navbar;