import React, {Component} from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import CardFavoritos from "../Card/CardFavoritos";


class Favoritos extends Component {
    constructor(props){
        super(props)
        this.state ={
            pelisFav: [],
            seriesFav: []
        }
    }

    componentDidMount(){
        let pelisFav = localStorage.getItem("pelisFavoritos");
        
    


        if (pelisFav !== null){
            const pelisFavoritas = JSON.parse(pelisFav);
            let arrayPelis = [];
            pelisFavoritas.forEach (pelicula => {
                fetch(`https://api.themoviedb.org/3/movie/${pelicula}?api_key=cd221d9b379938868090204c71bbef7e&language=en-US&page=1`)
                .then(response => response.json())
                .then(data => {
                    console.log(data)
                    arrayPelis.push(data);
                    this.setState({ pelisFav: arrayPelis });
                
                })
                .catch(error => console.log(error));
            });
            
            
        }

    

        
    }

    agregarAFavoritos  =(id)=>{
        let pelisFavs = localStorage.getItem("pelisFavoritos");
        pelisFavs = JSON.parse(pelisFavs);

        if (!pelisFavs){
            pelisFavs = [];
        }

        if (!pelisFavs.includes(id)) {
            pelisFavs.push(id);

            localStorage.setItem("pelisFavoritos", JSON.stringify(pelisFavs));
            this.setState ({pelisFav : pelisFavs})
        } else {
            const newPelis = pelisFavs.filter(pelicula => pelicula !== id);
            localStorage.setItem("pelisFavoritos", JSON.stringify(newPelis));
            this.setState ({pelisFav : newPelis})
        }

    }

    render (){
        return (
            <React.Fragment>
                <Header/>
                
                <h1> Tus favoritos</h1>
                <main>
                    <h2> Peliculas favoritas</h2>
                    <section>
                        {
                            this.state.pelisFav.length === 0 ?
                            <p>No tienes películas favoritas</p> :
                            <>
                                {this.state.pelisFav.map((pelicula, index) => <CardFavoritos pelicula={pelicula} key={index} funcion={this.agregarAFavoritos}/>)}
                            </>
                        } 
                    </section>
                </main>
                <Footer/>

            </React.Fragment>


        )
    }



    
}

export default Favoritos;