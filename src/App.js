import {BrowserRouter, Switch, Route} from 'react-router-dom';

import NotFound from './components/NotFound/NotFound';
import VerTodas from "./components/VerTodas/VerTodas";
// // import Card from "./components/Card/Card";
import Home from "./components/Home/Home.jsx";
//import Detalle from './components/Detalle/DetallePelicula';
import "./index.css"
import DetallePelicula from './components/Detalle/DetallePelicula';


function App() {
  return (
    <div className= "app">
      <BrowserRouter>
        <Switch>
          <Route path='/' exact={true} component={Home}/>
          <Route path='/vertodas' exact={true} component={VerTodas}/>
          {/* <Route path='/Pelicula/:id' exact={true} component={DetallePelicula}/> */}
          </Switch>
           
          <Route path= "" component={NotFound} /> 
      </BrowserRouter>
    </div>
  );
}

export default App;
