import React, {Component} from 'react';
import Header from '../Header/Header.jsx';
import Footer from '../Footer/Footer.jsx';



class ResultadoBusqueda extends Component {
    constructor(props) {
        super(props)
        this.state = {
            buscador: this.props.match.params.busqueda,
            resultado: []
        }
    }}