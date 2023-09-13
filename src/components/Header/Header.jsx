import React from "react";
import Navbar from "../Navbar/NavBar";
import "./header.css";

function Header() {
    return(
    <header>
    <img class="logo" src="./img/Disney_Plus_logo.svg.png"/>
    <nav class="navegacion">
    <ul>
        <li class="lista"><Navbar/></li>
    </ul>
    </nav>
    <nav class="formulario">
    <form action="./search-results.html" method="get">
        <input class="search barra"  id="inputBusqueda" type="text" name="buscador" value="" placeholder="Buscador"/>
        <button class="search boton" type="submit">Buscar</button>
    </form>
    <p class="errorBuscador"></p>
    </nav>
    <i class="fa-solid fa-bars"></i>
    </header>
)};

export default Header;