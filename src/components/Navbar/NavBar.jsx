import React from "react";
import { Link } from "react-router-dom";
import "./NavBar.css";

function Navbar (){
    return (
        <nav className="navegacion">
            <ul className="listaNavegacion">
                <li>
                    <Link to="/"> Home</Link>
                </li>
                <li>
                    <Link to="/favoritos"> Favoritos</Link>
                </li>
                <li>
                    <Link to="/vertodas">Ver todas</Link>
                </li> 
            </ul>
        </nav>
    )
}

export default Navbar;