import React from 'react';
import { useState } from 'react';



function Button() {
  const [contador, setContador]= useState(0);
  return (<div className="contador">
    <p>{contador}</p>
    <button onClick={() => setContador(contador+1)}>Incrementa</button>
    <button onClick={() => setContador(contador-1)}>Decrementa</button>
    </div>)
}

export default Button;