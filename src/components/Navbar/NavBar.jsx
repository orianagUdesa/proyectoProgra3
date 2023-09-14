import React from "react";
import { Link } from "react-router-dom";
import "./NavBar.css";

function Navbar (){
    return (
        <nav class="navegacion">
            <ul class="lista">
                <li class="componente"><Link to="/"> Home</Link></li>
                <li class="componente"><Link to="/favoritos"> Favoritos</Link></li> 
                <li class="componente"><Link to="/vertodas"> Ver todas</Link></li> 
            </ul>
            <ul></ul>
        </nav>
    )
}

export default Navbar;