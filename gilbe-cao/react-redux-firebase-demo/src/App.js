import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Si quieres aprender a programar... vente a Skylab!
        </p>
        <a
          className="App-link"
          href="https://skylabcoders.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          Skylab mola!
        </a>
      </header>
    </div>
  );
}

export default App;
