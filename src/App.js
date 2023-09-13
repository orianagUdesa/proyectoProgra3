import {BrowserRouter, Switch, Route} from 'react-router-dom';
// import VerTodas from './components/VerTodas/VerTodas';
// import Footer from "./components/Footer/Footer";
// import NotFound from './components/NotFound/NotFound';
// // import VerTodas from "./components/VerTodas/VerTodas";
// // import Card from "./components/Card/Card";
import Home from "./components/Home/Home.jsx";
import "./index.css"


function App() {
  return (
    <div className= "app">
      <BrowserRouter>
        <Switch>
          <Route path='/' exact={true} component={Home}/>
          </Switch>
{/*            
          <Route path= "*" component={NotFound} /> */}
      </BrowserRouter>
    </div>
  );
}

export default App;
