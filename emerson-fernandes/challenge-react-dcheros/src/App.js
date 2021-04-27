import { BrowserRouter as Router, Switch, Route,Link} from "react-router-dom";
import './App.css';
import {Header} from './component/header/Header'

function App() {
  return (
    <div>
      <Header/>
      <Router>
        <Link to='/'>
          <button>Dashboard</button>
        </Link>
        <Link to='/HeroList'>
          <button>Hero List</button>
        </Link>
        <Switch>
          <Route exact path='/'>
            <h1>Primeira ruta</h1>
          </Route>
          <Route exact path='/HeroList'>
            <h1>Segunda ruta</h1>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
