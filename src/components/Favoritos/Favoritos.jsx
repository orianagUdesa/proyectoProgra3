import React, {Component} from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Card from "../Card/Card";
import Formulario from "../Formulario/Formulario";


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
        let seriesFav = localStorage.getItem ("SeriesFavoritos");
        pelisFav = JSON.parse (pelisFav);
        seriesFav = JSON.parse(seriesFav);


        if (pelisFav !== null){
            pelisFav = [];
        }
        if (seriesFav !== null){
            seriesFav = [];
        }

        pelisFav.forEach (pelicula => {
            fetch(`https://api.themoviedb.org/3/movie/${pelicula}?api_key=cd221d9b379938868090204c71bbef7e&language=en-US&page=1`)
            .then(response => response.json())
            .then(data => {
                let pelisFavs = this.state.pelisFavs;
                pelisFavs.push(data);
                this.setState({ pelisFavs: pelisFavs });
            })
            .catch(error => console.log(error));
        });

        seriesFav.forEach (serie => {
            fetch(`https://api.themoviedb.org/3/movie/${serie}?api_key=cd221d9b379938868090204c71bbef7e&language=en-US&page=1`)
            .then(response => response.json())
            .then(data => {
                let seriesFavs = this.state.seriesFavs;
                seriesFavs.push(data);
                this.setState({ seriesFavs: seriesFavs });
            })
            .catch(error => console.log(error));

        });
    }

    agregarAFavoritos (id){
        let pelisFavs = localStorage.getItem("favoritos");
        //let seriesFavs = localStorage.getItem("favoritos");
        pelisFavs = JSON.parse(pelisFavs);
        //seriesFavs = JSON.parse (seriesFavs);

        if (!pelisFavs){
            pelisFavs = [];
        }

        if (!pelisFavs.includes(id)) {
            pelisFavs.push(id);

            localStorage.setItem("pelisFavs", JSON.stringify(pelisFavs));
            this.setState ({pelisFavs})
        }

    }

    render (){
        return (
            <React.Fragment>
                <Header/>
                <Formulario/>
                <h1> Tus favoritos</h1>
                <main>
                    <h2> Peliculas favoritas</h2>
                    <section>
                        {
                            this.state.pelisFav.length === 0 ?
                            <p>No tienes películas favoritas</p> :
                            <>
                                {this.state.pelisFav.map((pelicula, index) => <Card pelicula={pelicula} key={index} />)}
                            </>
                        } 
                    </section>
                    <h2> Series favoritas</h2>
                    <section>
                        {
                            this.state.seriesFav.length === 0 ?
                            <p>No tienes series favoritas</p> :
                            <>
                                {this.state.seriesFav.map((serie, index) => <Card pelicula={serie} key={index} />)}
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