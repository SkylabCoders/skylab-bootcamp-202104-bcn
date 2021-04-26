import logo from './logo.svg';
import './App.css';
import React from 'react';
import {useState} from 'react'

const Incrementor = ({incrementor}) => (
  <button onClick={incrementor}> + </button>  
)
const Decrementor = ({decrementor}) => (
  <button onClick={decrementor}> - </button>  
)




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

