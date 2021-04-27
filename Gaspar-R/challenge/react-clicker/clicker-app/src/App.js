import logo from './logo.svg';
import './App.css';
import React from 'react';
import {useState} from 'react'
import Incrementor from './components/incrementor';
import Decrementor from './components/decrementor';



function App() {
  let [count, setCount] = useState(0);

const incrementor = () => (
  setCount(count+1)
  )

  const decrementor = () => (
    setCount(count-1)
    )  

  return (
    <div className="App">
      <header className="App-header">
       
        <p>
          <Decrementor decrementor={decrementor}/>
        {count}
          <Incrementor incrementor={incrementor}/>
        </p>
        
      </header>
    </div>
  );
}
export default App;

