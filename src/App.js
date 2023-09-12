import {BrowserRouter, Switch, Route} from 'react-router-dom';
import VerTodas from './components/VerTodas/VerTodas';
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
// import VerTodas from "./components/VerTodas/VerTodas";
// import Card from "./components/Card/Card";
import Home from "./components/Home/Home.jsx";
import "./index.css"


function App() {
  return (
    <div className= "app">
      <BrowserRouter>
      <Header/>
      <Home/>
      <Footer/>
        <Switch>
          <Route path='/' exact={true} component={Home}/>
          
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
