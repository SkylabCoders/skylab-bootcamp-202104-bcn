import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
  Link
} from 'react-router-dom';
import List from './components/list/list';
import HeroDetailComponent from './components/details/details';

function App() {
  return (
    <>
      <Router>
        <div className="App">
          <header>
            <nav>
              <ul>
                <Link to="./../">
                  <li>List of heroes</li>
                </Link>
              </ul>
            </nav>
          </header>
        </div>
        <Switch>
          <Route exact path="/list/" component={List} />
          <Route exact path="/details/:heroId" component={HeroDetailComponent} />
          <Redirect to="./list" />
        </Switch>
      </Router>
    </>
  );
}
export default App;
