/* eslint-disable react/react-in-jsx-scope */
import './App.css';
import HeroesListComponent from './components/heroesListComponent';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        Tour of Heroes
      </header>
      <HeroesListComponent />
    </div>
  );
}

export default App;
