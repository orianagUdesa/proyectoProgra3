import React, {Component} from 'react';

class Home extends Component{
    constructor (props){
        super(props)
        this.state ={
            peliculas: [],
            series: [], 
        }
    }
    componentDidMount (){
        fetch('https://api.themoviedb.org/3/movie/popular?api_key=cd221d9b379938868090204c71bbef7e&language=en-US&page=1')
            .then(response => response.json())
            .then(data => {
                let peliculasArray = []
                for(let i=0;i<5;i++)          //se usa for? o map y filter?
                    peliculasArray.push(data.results[i])

                this.setState({
                    peliculas: peliculasArray
                }) 
            })
                                           //peliculas de donde sale?
            .catch( error => console.log(error))


        fetch('https://api.themoviedb.org/3/tv/popular?api_key=cd221d9b379938868090204c71bbef7e&language=en-US&page=1')//esta bien?
            .then(response => response.json())
                .then(data => {
                    let seriesArray = []
                    for(let i=0;i<5;i++)          //se usa for? o map y filter?
                        seriesArray.push(data.results[i])

                        this.setState({
                            series: seriesArray
                        }) //peliculas de donde sale?
                })
                
                .catch( error => console.log(error))
            
    }
    //VER EL RENDER MANIANA
    render(){
        console.log("me monte")
        return(
         <div>
         <div>
             {this.state.datos === '' ?
             <h3>Cargando...</h3> :
             <h3>{this.state.datos}</h3>}
        </div>
        <h2 class="ofertas">Películas populares</h2>
        
        <h2 class="ofertas">Las más valoradas</h2>
        
        <h2 class="ofertas">Peliculas recomendadas</h2>
        
        <h2 class="ofertas">Últimos lanzamientos</h2>
        
        </div>
        )};

}

export default Home;


