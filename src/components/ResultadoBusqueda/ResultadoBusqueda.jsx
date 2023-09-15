import React, {Component} from 'react';
import Header from '../Header/Header.jsx';
import Footer from '../Footer/Footer.jsx';
import Card from '../Card/Card.jsx';
import "./resultadoBusqueda.css";



class ResultadoBusqueda extends Component {
    constructor(props) {
        super(props)
        this.state = {
            buscador: this.props.match.params.buscador,
            resultado: []
        }}

        componentDidMount() {
            fetch(`https://api.themoviedb.org/3/search/multi?api_key=cd221d9b379938868090204c71bbef7e&language=en-US&query=${this.props.match.params.buscador}`)
                .then(response => response.json())
                .then(data => {
                    this.setState({
                        resultado: data.results,
                    });
                })
                .catch(error => console.log(error))
        }
       render(){
        return(//console.log(resultado)
        <section>
        <Header/>
        {this.state.resultado.map((resultado,index) => <Card pelicula={resultado} key={index} serie={resultado}/>)}
        <Footer/>
        </section>
        )
        } 
        
        
        
    }
export default ResultadoBusqueda;
