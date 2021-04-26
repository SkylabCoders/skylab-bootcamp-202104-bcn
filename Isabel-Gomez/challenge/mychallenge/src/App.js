import logo from './logo.svg';
import './App.css';
import createButton from './component';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>The Button</h1>
        <createButton getClick={(counter) => {console.log(counter++)}} />
      </header>
    </div>
  );
}

export default App;
