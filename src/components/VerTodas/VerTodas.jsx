
import React, {Component} from 'react';
import Header from '../Header/Header.jsx';
import Footer from '../Footer/Footer.jsx';
import Card from '../Card/Card.jsx';
import "./verTodas.css"

class VerTodas extends Component{
    constructor (props){
        super(props)
        this.state ={
            peliculas: [],
            series: [],
             
        }
    }
    componentDidMount (){
        fetch('https://api.themoviedb.org/3/movie/popular?api_key=cd221d9b379938868090204c71bbef7e&language=en-US&page=1')
            .then(response => response.json())
            .then(data => {
                
                this.setState({
                    peliculas: data.results
                }) 
            })
            .catch( error => console.log(error))
        fetch('https://api.themoviedb.org/3/tv/popular?api_key=cd221d9b379938868090204c71bbef7e&language=en-US&page=1')//esta bien?
            .then(response => response.json())
                .then(data => {
        
                        this.setState({
                            series: data.results
                        }) 
                })
                
                .catch( error => console.log(error))
        }
        render () { console.log(this.state.peliculas)
            return (
                <>
                <Header />
                <main>
                <h2 class="ofertas">Todas las peliculas</h2>
                <section class="peliculasP">
                    {
                        this.state.peliculas.map((pelicula,index) => <Card pelicula={pelicula} key={index} />)
                    }
                </section>
                <h2 class="ofertas">Todas las series</h2>
                <section class="container peliculas-populares">
                {
                    this.state.series.map((serie, index) => { 
                        return (
                            <Card pelicula={serie} key={index} />
                                )
                        })
                }
                </section>
            </main>
                <Footer />
                </>
            )
                    
                }
}


    export default VerTodas;
    