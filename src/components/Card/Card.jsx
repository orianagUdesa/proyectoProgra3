import React,{Component} from "react";
import "./card.css";
import { Link } from "react-router-dom";

class Card extends Component {
    constructor(props) {
        super(props)
        this.state = {
            detalle: false,
            favorito: false,

        }
    }

    componentDidMount(){
        let peliculasFav = localStorage.getItem ("peliculasFav")
        let seriesFav = localStorage.getItem ("seriesFav")
        peliculasFav = JSON.parse(peliculasFav)
        seriesFav = JSON.parse(seriesFav)
        
        if (peliculasFav ===null) {
            peliculasFav = []
        }

        if (seriesFav ===null){
            seriesFav = []
        }

        if (peliculasFav.includes(this.props.pelicula.id)){
            this.setState ({favorito:true})
        } else if (seriesFav.includes(this.props.pelicula.id)){
            this.setState({favorito:true})
        } else {
            this.setState ({favorito: false})
        }
    }

    aggQuitFavoritos (id){
        let peliculasFav = localStorage.getItem ("peliculasFav")
        let seriesFav = localStorage.getItem ("seriesFav")
        peliculasFav = JSON.parse(peliculasFav)
        seriesFav = JSON.parse(seriesFav)

        if (peliculasFav ===null) {
            peliculasFav = []
        }

        if (seriesFav ===null){
            seriesFav = []
        }

        if (peliculasFav.includes(id)){
            peliculasFav.splice(peliculasFav.indexOf(id), 1)
            localStorage.setItem(peliculasFav,JSON.stringify(peliculasFav))
            this.setState({favorito:false})
        } else if (seriesFav.includes(id)){
            seriesFav.splice(seriesFav.indexOf(id), 1)
            localStorage.setItem(seriesFav,JSON.stringify(seriesFav))
            this.setState({favorito:false})
        } else {
            if (this.props.pelicula.name){
                peliculasFav.push(id)
                localStorage.setItem("peliculasFav", JSON.stringify(peliculasFav))
                this.setState({favorito:true})
            } else {
                seriesFav.push(id)
                localStorage.setItem("seriesFav", JSON.stringify(seriesFav))
                this.setState({favorito:true})
            }
        }
    }

    render (){
        return (
            <section className="seccion1">
                    <div class="imagen">
                        <img src={`https://image.tmdb.org/t/p/w500${this.props.pelicula.poster_path}`} alt={this.props.pelicula.title}/>
                    </div>
                    <div class="contcalificacion">
                        <h1 className="titulo"> {this.props.pelicula.title}</h1>
                        <h3 className="calificacion">Calificación:{this.props.pelicula.vote_average} </h3>
                    </div>
                    
                    {
                        this.state.detalle === true ?
                            <section className="descripcion">Sinopsis
                            {
                                this.props.pelicula.overview === "" ?
                                <p> No hay sinopsis </p> :
                                <p> {this.props.pelicula.overview}</p>

                            }
                            </section> : null
                    }
                    <button onClick = {() => this.setState({ detalle: !this.state.detalle })}> Ver { this.state.detalle ? "menos" : "más" }</button>
                    {
                        this.props.pelicula.name ?
                        <>
                            <button onClick={() => this.aggQuitFavoritos(this.props.pelicula.id)}>{this.state.favorito ? "Quitar de favoritos" : "Agregar a favoritos"}</button>
                            <Link to={`/serie/${this.props.pelicula.id}`}>Ver detalles</Link>
                        </> :
                        <>
                            <button onClick={() => this.aggQuitFavoritos(this.props.pelicula.id)}>{this.state.favorito ? "Quitar de favoritos" : "Agregar a favoritos"}</button>
                            <Link to={`/pelicula/${this.props.pelicula.id}`}>Ver detalles</Link>
                        </>
                    }
            </section>
            
        );
    }
}



export default Card;
