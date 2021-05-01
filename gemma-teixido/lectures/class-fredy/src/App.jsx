import React from 'react';
import
{
  BrowserRouter as Router,
  Swtich,
  Route,
  Link
} from 'react-router-dom';
import './App.css';

function App() {
  return (
    <div className="App">
      <header>
        <h1>Hola</h1>
        <Link to="/">Dashboard</Link>
        <Link to="/countries">Countries</Link>
      </header>
      <main>
        <Router>
          <Swtich>
            <Route path="/" exact component={Dashboard} />
            <Route path="/countries" component={Countries} />
          </Swtich>
        </Router>
      </main>
    </div>
  );
}

export default App;
