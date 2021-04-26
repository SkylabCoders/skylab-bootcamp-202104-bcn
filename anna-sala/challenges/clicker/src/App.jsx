import './App.css';
import React from 'react';
import MyClicker from './MyClicker';
// import Clicker from './Clicker';

function App() {
  return (
    // <Clicker handleClick={(letter) => { console.log(letter); }} />
    <MyClicker handleClick={() => { console.log('jojojo'); }} />
  );
}

export default App;
