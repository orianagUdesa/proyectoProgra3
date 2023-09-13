import React, {Component} from 'react';
import Header from '../Header/Header.jsx';
import Footer from '../Footer/Footer.jsx';



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
                    <h1>Pelicula detalle</h1>
                    <img src={`https://image.tmdb.org/t/p/w342${this.state.pelicula.poster_path}`} alt={this.state.pelicula.title} />
                    <h2>{this.state.pelicula.title}</h2>
                <ul>
                    <li>Rating: {this.state.pelicula.vote_average} </li> 
                    <li>Fecha de estreno:{this.state.pelicula.release_date} </li>
                    <li>Sinopsis: {this.state.pelicula.overview}</li>
                </ul>
                </main>
                <Footer />
            </>
        )
    }
}










export default PeliculaDetalle;