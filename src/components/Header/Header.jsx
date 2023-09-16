import React from "react";
import Navbar from "../Navbar/NavBar";
import Formulario from '../Formulario/Formulario'
import { Link } from "react-router-dom";
import "./header.css";

function Header() {
    return(
    <header>
        <div class="logoImageContainer">
        <Link to="/">
            <div className="logoImage"></div>
        </Link>
        </div>
        <Navbar />
        <nav class="formulario">
            <Formulario /> 
            <p class="errorBuscador"></p>
        </nav>
    <i class="fa-solid fa-bars"></i>
    </header>
)};

export default Header;