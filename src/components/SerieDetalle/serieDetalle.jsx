import React, {Component} from 'react';
import Header from '../Header/Header.jsx';
import Footer from '../Footer/Footer.jsx';

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
                    <h1>Detalle de la serie</h1>
                    <img src={`https://image.tmdb.org/t/p/w342${this.state.serie.poster_path}`} alt={this.state.serie.title} />
                    <h2>{this.state.serie.title}</h2>
                <ul>
                    <li>Rating: {this.state.serie.vote_average} </li> 
                    <li>Fecha de estreno:{this.state.serie.release_date} </li>
                    <li>Sinopsis: {this.state.serie.overview}</li>
                </ul>
                </main>
                <Footer />
            </>
        )
    }


}


export default SerieDetalle;