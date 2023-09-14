import React, {Component} from 'react';
import Header from '../Header/Header.jsx';
import Footer from '../Footer/Footer.jsx';
import "./peliculaDetalle.css"



class PeliculaDetalle extends Component {
    constructor(props) {
        super(props)
        this.state = {
            pelicula:{}, 
        }
    }
    componentDidMount() {
        let idPelicula = this.props.match.params.id
        fetch(`https://api.themoviedb.org/3/movie/${idPelicula}?api_key=cd221d9b379938868090204c71bbef7e&language=en-US`)
        .then(response => response.json())
        .then(data => {
            this.setState({ pelicula: data })
        })
        .catch(error => console.log(error))   
    }
    render() {
        return (
            <>
                <Header/>
                <main>
                    <section class="seccion1">
                        <div class= "imagen">
                            <img class= "portadadetalle" src={`https://image.tmdb.org/t/p/w342${this.state.pelicula.poster_path}`} alt={this.state.pelicula.title} />
                        </div>
                        <div class= "contcalificacion">
                            <h1 class ="titulo">{this.state.pelicula.title}</h1>
                            <h2>Calificacion</h2>
                                <p class="data">{this.state.pelicula.vote_average}</p>
                        </div>
                    </section>
                    <section class="seccion2">
                        <article class="cajauno">
                            <h3 class="info">Fecha de estreno</h3>
                                <p class="data">{this.state.pelicula.release_date}</p>
                            <h3 class="info">Genero</h3>
                                <p class="data">{this.state.pelicula.genres_ids}</p>
                        </article>
                        <article class="caja3">
                            <h3 class="info">Sinopsis</h3>
                                <p class="data">{this.state.pelicula.overview}</p>
                        </article>
                    </section>
                </main>
                <Footer />
            </>
        )
    }
}










export default PeliculaDetalle;