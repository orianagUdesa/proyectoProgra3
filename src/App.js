import {BrowserRouter, Switch, Route} from 'react-router-dom';

import NotFound from './components/NotFound/NotFound';
import VerTodas from "./components/VerTodas/VerTodas";
import Home from "./components/Home/Home.jsx";
import PeliculaDetalle from './components/PeliculaDetalle/PeliculaDetalle';
import SerieDetalle from './components/SerieDetalle/serieDetalle';
import ResultadoBusqueda from './components/ResultadoBusqueda/ResultadoBusqueda';
import Formulario  from './components/Formulario/Formulario';
import "./index.css"



function App() {
  return (
    <div className= "app">
      <BrowserRouter>
        <Switch>
          <Route path='/' exact={true} component={Home}/>
          <Route path='/vertodas' exact={true} component={VerTodas}/>
          <Route path='/pelicula/:id' exact={true} component={PeliculaDetalle}/>
          <Route path='/serie/:id' exact={true} component={SerieDetalle}/> 
          <Route path="/resultadobusqueda/:buscador" component={ResultadoBusqueda} />   
          <Route path= "" component={NotFound} /> 
          </Switch>
           
          
      </BrowserRouter>
    </div>
  );
}

export default App;
