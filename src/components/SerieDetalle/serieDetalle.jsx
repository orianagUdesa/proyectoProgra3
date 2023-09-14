import React, {Component} from 'react';
import Header from '../Header/Header.jsx';
import Footer from '../Footer/Footer.jsx';
import "./serieDetalle.css"

class SerieDetalle extends Component {
    constructor(props) { //que son las props, osea que viene?
        super(props)
        this.state = {
            serie:{}, 
        }
    }
    componentDidMount() {
        let idSerie = this.props.match.params.id
        fetch(`https://api.themoviedb.org/3/tv/${idSerie}?api_key=cd221d9b379938868090204c71bbef7e&language=en-US`)
        .then(response => response.json())
        .then(data => {
            this.setState({ serie: data })
            console.log(data)
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
                        <img src={`https://image.tmdb.org/t/p/w342${this.state.serie.poster_path}`} alt={this.state.serie.title} />
                        </div>
                        <div class= "contcalificacion">
                           <h1 class="titulo">{this.state.serie.name}</h1>
                           <h2>Calificacion</h2>
                                <p class="data">{this.state.serie.vote_average}</p>
                        </div>
                    </section>
                    <section class="seccion2">
                        <article class="cajauno">
                            <h3 class="info">Fecha de estreno</h3>
                                <p class="data">{this.state.serie.first_air_date}</p>
                            <h3 class="info">Genero</h3>
                                <p class="data">{this.state.serie.genres_ids}</p>
                        </article>
                        <article class="caja3">
                            <h3 class="info">Sinopsis</h3>
                                <p class="data">{this.state.serie.overview}</p>
                        </article>
                    </section>
                </main>
                <Footer />
            </>
        )
    }


}


export default SerieDetalle;