import React from "react";
import Navbar from "../Navbar/NavBar";
import Formulario from '../Formulario/Formulario'
import "./header.css";

function Header() {
    return(
    <header>
        <div class="contlogo">
        <img class="logo" src="../img/Disney_Plus_logo.svg.png"/>
        </div>
        <nav class="navegacion">
            <ul>
                <li class="lista"><Navbar/></li>
        </ul>
    </nav>
    <nav class="formulario">
        <Formulario /> 
        <p class="errorBuscador"></p>
    </nav>
    <i class="fa-solid fa-bars"></i>
    </header>
)};

export default Header;