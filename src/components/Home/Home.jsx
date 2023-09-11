import React from "react";
/* function Home (){
fetch('https://api.themoviedb.org/3/movie/popular?api_key=cd221d9b379938868090204c71bbef7e&language=en-US&page=1') //poner bien el endpoint
    .then(function(response){
        return response.json();
    })
    .then(function(data){
        console.log(data);
    })
    .catch(function(error){
        console.log("el error es: " + error)
    })
}
export default Home; */

//FALTA EL OTRO FETCH PARA TRAER OTRA SECTION

import React, {Component} from 'react';
class Home extends Component{
    constructor (props){
        super(props)
        this.state ={
            datos: '' //ver si datos esta bien asi
        }
    }
    componentDidMount (){
        fetch('https://api.themoviedb.org/3/movie/popular?api_key=cd221d9b379938868090204c71bbef7e&language=en-US&page=1')
        .then(response => response.json())
        .then(data => this.setState(
            {datos: data.results.poster_path} //fijarnos si el data esta bien o si se saca
        ))
        .catch( error => console.log(error))
    }
    render(){
        return(
        <div>
            {this.state.datos === '' ?
            <h3>Cargando...</h3> :
            <h3>{this.state.datos}</h3>}
        </div>
        )
    }
}