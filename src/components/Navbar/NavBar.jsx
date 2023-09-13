import React from "react";
import { Link } from "react-router-dom";

function Navbar (){
    return (
        <nav>
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