import React,{Component} from "react";
import "./card.css";
import Loader from "../Loader/Loader";
import { Link } from "react-router-dom";

class Card extends Component {
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
        let recuperoStorageS = localStorage.getItem ("SeriesFavoritos");


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

    agregarAFavoritos (id){
        // let peliculasFav = localStorage.getItem ("peliculasFav")
        // let seriesFav = localStorage.getItem ("seriesFav")
        // peliculasFav = JSON.parse(peliculasFav)
        // seriesFav = JSON.parse(seriesFav)

        // if (peliculasFav === null) {
        //     peliculasFav = []
        // }

        // if (seriesFav ===null){
        //     seriesFav = []
        // }

        // if (peliculasFav.includes(id)){
        //     peliculasFav= peliculasFav.filter(unId => unId !== id)
        //     this.setState({favorito:false})
        // } else if (seriesFav.includes(id)){
        //     seriesFav= seriesFav.filter(unId => unId !== id)
        //     this.setState({favorito:false})
        // } else {
        //     if (this.props.pelicula.name){
        //         peliculasFav.push(id)
        //         this.setState({favorito:true})
        //     } else {
        //         seriesFav.push(id)
        //         this.setState({favorito:true})
        //     }
        // }

        let arrayPelisFavoritos = [];
        let arraySeriesFavoritos = [];
        let recuperoStorageP = localStorage.getItem("favoritos");
        let recuperoStorageS = localStorage.getItem("favoritos");
        arrayPelisFavoritos.push(id)
        arraySeriesFavoritos.push (id)

        if (recuperoStorageP !== null){
            arrayPelisFavoritos = JSON.parse(recuperoStorageP);
        }
        if (recuperoStorageS !== null){
            arraySeriesFavoritos = JSON.parse(recuperoStorageS);
        }

        if (arrayPelisFavoritos.includes(id)){
            //si el id esta en el array queremos sacar id.
            arrayPelisFavoritos = arrayPelisFavoritos.filter(unId => unId !== id);
            this.setState({boton: "Agregar a Favoritos"})
        } else if (arraySeriesFavoritos.includes(id)){
            arraySeriesFavoritos = arraySeriesFavoritos.filter(unId => unId !== id);
            this.setState({boton: "Agregar a favoritos"})
        } else {
            if (this.props.pelicula.name){
                arrayPelisFavoritos.push(id)
                this.setState({boton: "Quitar de favoritos"})
            } else {
                arraySeriesFavoritos.push(id)
                this.setState({boton: "Quitar de favoritos"})
            }
         }

        //subirlo a local storage stringifeado
        let arraysPelisFavAString = JSON.stringify (arrayPelisFavoritos);
        let arraysSeriesFavAString = JSON.stringify (arraySeriesFavoritos);
        localStorage.setItem ("favoritos", arraysPelisFavAString);
        localStorage.setItem ("favoritos", arraysSeriesFavAString);

    }

    render (){console.log(this.props.pelicula)
        return (
            <section className="container">
                <article class="caja">
                    <img src={`https://image.tmdb.org/t/p/w500${this.props.pelicula.poster_path}`} alt={this.props.pelicula.title}/>
                    <h1 className="titulo1"> {this.props.pelicula.title}</h1>
                    <h3 className="calificacion">Calificación: {this.props.pelicula.vote_average} </h3>
                    <button onClick = {() => this.setState({ detalle: !this.state.detalle })}> Ver { this.state.detalle ? "menos" : "más" }</button>
                    {
                        this.props.pelicula.name ?
                        <>
                            <button onClick={() => this.agregarAFavoritos(this.props.pelicula.id)}>{this.state.favorito ? "Quitar de favoritos" : "Agregar a favoritos"}</button>
                            <Link to={`/serie/${this.props.pelicula.id}`}>Ver detalles</Link>
                        </> :
                        <>
                            <button onClick={() => this.agregarAFavoritos(this.props.pelicula.id)}>{this.state.favorito ? "Quitar de favoritos" : "Agregar a favoritos"}</button>
                            <Link to={`/pelicula/${this.props.pelicula.id}`}>Ver detalles</Link>
                        </>
                    }
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
                <article>
                    
                </article>

                
                    
            </section>
            
            
        );
    }
}



export default Card;
