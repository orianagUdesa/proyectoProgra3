// import React, {Component} from "react";
// import Header from "../Header/Header";
// import Footer from "../Footer/Footer";
// import Formulario from "../Formulario/Formulario";

// class Favoritos extends Component {
//     constructor(props) {
//         super(props)
//         this.state ={
//             peliculasFavs: [],
//             seriesFavs: []
//         }
//     }

//     componentDidMount() {
//         let peliculasFavs = localStorage.getItem("peliculasFavs");
//         let seriesFavs = localStorage.getItem("seriesFavs");
//         peliculasFavs= JSON.parse(peliculasFavs);
//         seriesFavs= JSON.parse(seriesFavs);

//         if (peliculasFavs !== null) {
//             peliculasFavs = [];
//         }

//         if (seriesFavs !== null) {
//             seriesFavs= [];
//         }

//         peliculasFavs.forEach (pelicula => {
//             fetch(`https://api.themoviedb.org/3/movie/${pelicula}?api_key=cd221d9b379938868090204c71bbef7e&language=en-US&page=1`)
//             .then (response => response.json())
//             .then (data => {
//                 let peliculasFavs= this.state.peliculasFavs;
//                 peliculasFavs.push(data);
//                 this.setState({ peliculasFavs: peliculasFavs});
//             })
//             .catch (error => console.log(error))
//         })

//         seriesFavs.forEach (serie => {
//             fetch(`https://api.themoviedb.org/3/tv/${serie}?api_key=cd221d9b379938868090204c71bbef7e&language=en-US&page=1`)
//             .then (response => response.json())
//             .then (data => {
//                 let seriesFavs = this.state.seriesFavs;
//                 seriesFavs.push(data);
//                 this.setState({seriesFavs:seriesFavs});
//             })
//             .catch (error => console.log(error))
//         })

//     //     agregarAFavoritos (id) {
//     //         let peliculasFavs = localStorage.getItem("peliculasFavs");
//     //         peliculasFavs = JSON.parse(peliculasFavs);

//     //         if (!peliculasFavs) {
//     //         peliculasFavs = [];
//     //         }

//     //         if (!peliculasFavs.includes(id)) {
//     //             peliculasFavs.push(id);

//     //             localStorage.setItem("peliculasFavs", JSON.stringify(peliculasFavs));

//     //             // Actualiza el estado de peliculasFavs en el componente
//     //             this.setState({peliculasFavs});
//     //         };
//     //     };
//     // }

//     // render(){
//     //     return (
//     //         <>
//     //         <Header/>
//     //         <Formulario/>
//     //         <article>
//     //             <h1> Favoritos</h1>
//     //             <section className="favoritos">
//     //                 {
//     //                     this.state.peliculasFavs.length === 0 
//     //                     <p> No hay peliculas favoritas </p>
//     //                     <>
//     //                         {this.state.peliculasFavs.map((pelicula,index)=> <Card pelicula={pelicula} key={index}/>)}
//     //                     </>
//     //                 }
//     //             </section>
//     //             <section>
//     //                 {
//     //                     this.state.seriesFavs.length === 0
//     //                     <p> No hay series favoritas</p>
//     //                     <>
//     //                         {this.state.seriesFavs.map((serie,index)=> <Card  pelicula={serie} key={index} />)}
//     //                     </>
//     //                 }
//     //             </section>
//     //         </article>
//     //         <Footer/>
//     //     </>

//     //     )
//     }
// }
// export default Favoritos;