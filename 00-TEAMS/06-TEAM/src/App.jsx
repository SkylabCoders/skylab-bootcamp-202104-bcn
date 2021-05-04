import React from 'react';
import './App.css';
import { Provider } from 'react-redux';
import store from './redux/store';
<<<<<<< HEAD
import Movies from './common/components/movies';
import slideShow from './common/components/slideShow/slideShow';
=======
import HeaderLayout from './application/components/layout/Layout';
>>>>>>> 116aa0102078dfabbb4b7c9c95f6a9234804e664

function App() {
  return (
    <div className="App">
      <Provider store={store}>
<<<<<<< HEAD
        <Router>
          <header>
            <h1>HELLO</h1>
            <Link to="/countries">Countries</Link>
          </header>
          <main>
            <Switch>
              <Route path="/" component={slideShow} />
              <Route path="/countries" component={Movies} />
            </Switch>
          </main>
        </Router>
=======
        <HeaderLayout />
>>>>>>> 116aa0102078dfabbb4b7c9c95f6a9234804e664
      </Provider>
    </div>
  );
}

export default App;
