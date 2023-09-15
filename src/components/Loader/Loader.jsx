// import React,{Component, Fragment} from 'react';

// class Loader extends Component {
//     constructor(props) {
//         super(props)
//         this.state = {
//             loader: true,
//         }
//     }

//     componentDidMount(){
//         fetch('https://api.themoviedb.org/3/movie/popular?api_key=cd221d9b379938868090204c71bbef7e&language=en-US&page=1')
//             .then(response => response.json())
//             .then(data => {
//                 let peliculasArray = []

//                 for(let i=0;i<5;i++) {         //se usa for? o map y filter?
//                     peliculasArray.push(data.results[i])
//                 }

//                 this.setState({
//                     peliculas: peliculasArray
//                 }) 
//             })
//                                            //peliculas de donde sale?
//             .catch( error => console.log(error))


//         fetch('https://api.themoviedb.org/3/tv/popular?api_key=cd221d9b379938868090204c71bbef7e&language=en-US&page=1')//esta bien?
//             .then(response => response.json())
//                 .then(data => {
//                     let seriesArray = []

//                     for(let i=0;i<5;i++) {          //se usa for? o map y filter?
//                         seriesArray.push(data.results[i])
//                     }
//                         this.setState({
//                             series: seriesArray
//                         }) //peliculas de donde sale?
//                 })
                
//                 .catch( error => console.log(error))
//     }

//     render(){
//         return (
//             <>
//             if ()
//             </>

//         )
//     }


// }

// export default Loader;