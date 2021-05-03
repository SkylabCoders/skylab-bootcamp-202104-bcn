import React from 'react';
import {
  BrowserRouter as Router, Switch, Route, Link
} from 'react-router-dom';
import './App.css';
import { Provider } from 'react-redux';
import store from './redux/store';
import Movies from './common/components/movies';
import MoviesSlideHead from './common/components/slider-head';

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <Router>
          <header>
            <h1>HELLO</h1>
            <Link to="/countries">Countries</Link>
            <MoviesSlideHead />
          </header>
          <main>
            <Switch>
              <Route path="/countries" component={Movies} />
            </Switch>
          </main>
        </Router>
      </Provider>
    </div>
  );
}

export default App;
