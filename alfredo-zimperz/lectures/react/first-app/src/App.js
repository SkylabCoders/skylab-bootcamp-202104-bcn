import logoFer from './fer.png'
import './App.css';
import ClickerDisplay from './components/ClickerDisplay';
import Clicker from './components/Clicker';
import { useState } from 'react';


function App() {

  const [clicks, setclicks] = useState(0)

  const addClickFunction = () => {setclicks(clicks + 1)}
  const quitClickFunction = () => {setclicks(clicks - 1)}

  return (
    <div className="App">
      <header className="App-header">
        <img src={logoFer}  className="App-logo" alt="logo" />
        <p>
          Fer esta ausente de la reactChatAPP
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          estudia català autèntic en només 3 mesos
        </a>
      </header>
      <main>
        <ClickerDisplay clicks={clicks}/>
        <Clicker addClick={addClickFunction} quitClick={quitClickFunction}/>
      </main>
    </div>
  );
}

export default App;
