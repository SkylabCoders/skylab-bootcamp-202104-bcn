import React, { useState } from 'react'

import { ClickerComponent } from'./ClickerComponent';



function TestComponent() {
    const [count, setCount] = useState(0);
    function onHandleIncrement(){
      setCount(count+1);
    }

    function onHandleDecrement(){
      setCount(count-1);
    }

    function onHandleReset(){
      setCount(0);
    }
  return (
    <main>
         <ClickerComponent handleClick = { onHandleIncrement } name = 'Increment'/>
         <ClickerComponent handleClick = { onHandleDecrement } name = 'Decrement'/>
         <ClickerComponent handleClick = { onHandleReset } name = 'Reset'/>
         <p>{count}</p>
    </main>
  )
}
export default TestComponent;