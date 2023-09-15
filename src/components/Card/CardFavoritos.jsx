import React,{Component} from "react";
import "./card.css";
import Loader from "../Loader/Loader";
import { Link } from "react-router-dom";

class CardFavoritos extends Component {
    constructor(props) {
        super(props)
        this.state = {
            favoritos: [],
            boton: "Agregar a favoritos"
            

        }
    }

    componentDidMount(){
        let arrayPelisFavoritos = [];
        let arraySeriesFavoritos =[];
        let recuperoStorageP = localStorage.getItem("pelisFavoritos");
        let recuperoStorageS = localStorage.getItem ("seriesFavoritos");


        if (recuperoStorageP !== null){
            arrayPelisFavoritos= JSON.parse(recuperoStorageP);

            if (arrayPelisFavoritos.includes(this.props.pelicula.id)){
                this.setState({boton: "Quitar de favoritos"})
            }
        }

        if (recuperoStorageS !== null){
            arraySeriesFavoritos = JSON.parse (recuperoStorageS);
            if (arraySeriesFavoritos.includes(this.props.pelicula.id)){
                this.setState.apply({boton:"Quitar de favoritos"})
            }
        }
    }


    render (){console.log(this.props.pelicula)
        return (
            <section className="container">
                <article class="caja">
                    <img class="tamano" src={`https://image.tmdb.org/t/p/w500${this.props.pelicula.poster_path}`} alt={this.props.pelicula.title}/>
                    <h1 className="titulo1"> {this.props.pelicula.title}</h1>
                    <h3 className="calificacion">Calificación:{this.props.pelicula.vote_average} </h3>
                </article>
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
                            <button onClick={() => this.props.funcion(this.props.pelicula.id)}>{this.state.boton}</button>
                            <Link to={`/serie/${this.props.pelicula.id}`}>Ver detalles</Link>
                        </> :
                        <>
                            <button onClick={() => this.props.funcion(this.props.pelicula.id)}>{this.state.boton}</button>
                            <Link to={`/pelicula/${this.props.pelicula.id}`}>Ver detalles</Link>
                        </>
                    }
            </section>
            
            
        );
    }
}



export default CardFavoritos;
