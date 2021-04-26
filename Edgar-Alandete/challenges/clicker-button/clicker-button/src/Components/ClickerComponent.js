import React from 'react';
export const ClickerComponent = ( {handleClick, name} ) => {
    return (
      <button onClick = { () => handleClick()}>{name}</button>);
  }
