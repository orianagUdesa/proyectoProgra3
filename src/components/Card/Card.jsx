import React,{Component} from "react";
import "./card.css";
import Loader from "../Loader/Loader";
import { Link } from "react-router-dom";

class Card extends Component {
    constructor(props) {
        super(props)
        this.state = {
            favoritos: [],
            isFavorite: false 
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
                this.setState({isFavorite: true})
            }
        }

        if (recuperoStorageS !== null){
            arraySeriesFavoritos = JSON.parse (recuperoStorageS);
            if (arraySeriesFavoritos.includes(this.props.pelicula.id)){
                this.setState.apply({isFavorite: true})
            }
        }
    }

    agregarAFavoritos (id){
        let arrayPelisFavoritos = [];
        let recuperoStorageP = localStorage.getItem("pelisFavoritos");
        arrayPelisFavoritos.push(id)
        

        if (recuperoStorageP !== null){
            arrayPelisFavoritos = JSON.parse(recuperoStorageP);
        } else {
            arrayPelisFavoritos = [];
        }

        if (arrayPelisFavoritos.includes(id)){
            //si el id esta en el array queremos sacar id.
            arrayPelisFavoritos = arrayPelisFavoritos.filter(unId => unId !== id);
            this.setState({isFavorite: false})
        } else {
      
                arrayPelisFavoritos.push(id)
                this.setState({isFavorite: true})
            
         }

        //subirlo a local storage stringifeado
        let arraysPelisFavAString = JSON.stringify (arrayPelisFavoritos);
        localStorage.setItem ("pelisFavoritos", arraysPelisFavAString);
        

    }



    render (){console.log(this.props.pelicula)
        return (
            <section className="containerCard">
                <article class="caja">
                    <img src={`https://image.tmdb.org/t/p/w500${this.props.pelicula.poster_path}`} alt={this.props.pelicula.title}/>
                    <h1 className="titulo1"> 
                        {this.props.pelicula.title}
                    </h1>
                    <h3 className="calificacion">
                        {
                            Array(Math.floor(this.props.pelicula.vote_average/2)).fill('').map(()=>(
                                <i class="bi bi-star-fill"></i>
                            ))
                        }
                        {
                            Array(Math.ceil(5 - this.props.pelicula.vote_average/2)).fill('').map(()=>(
                                <i class="bi bi-star"></i>
                            ))
                        }
                        {" "}<span className="score">{this.props.pelicula.vote_average}</span>
                    </h3>
                    {
                        this.props.pelicula.name ?
                        <>
                            
                            <Link to={`/serie/${this.props.pelicula.id}`}>Ver detalles</Link>
                        </> :
                        <>
                        <div class="buttonsCard">
                            <button className={`buttonFavorite ${this.state.isFavorite && "buttonFavoriteActive"}`} 
                                onClick={() => this.agregarAFavoritos(this.props.pelicula.id)}>
                                {
                                    this.state.isFavorite 
                                        ? <i class="bi bi-heart-fill"></i> 
                                        : <i class="bi bi-heart"></i>
                                } 
                            </button>
                            <button className="buttonPrimary showSynopsisButton" 
                                onClick = {() => this.setState({ detalle: !this.state.detalle })}>
                                Ver { this.state.detalle ? "menos" : "más" }
                            </button>
                            <Link className="buttonPrimary" to={`/pelicula/${this.props.pelicula.id}`}>
                                Ver detalles
                            </Link>
                        </div>
                            
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

                
                    
            </section>
            
            
        );
    }
}



export default Card;
