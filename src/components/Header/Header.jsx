import React from "react";
import Navbar from "../Navbar/NavBar";

function Header() {
    return(
    <header class="contlogo">
    <img class="logo" src="./img/Disney_Plus_logo.svg.png"/>
    <nav class="navegacion">
    <ul>
        <li class="lista"><Navbar/> Home</li>
        <li class="lista"><Navbar/> Favoritos</li>
        <li class="lista"><Navbar/> Generos</li>
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