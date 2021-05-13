import React from 'react';
import './input.css';

function Input() {
  return (
    <form className="form-block">
      <input className="form-block__input" type="text" id="fname" size="50" />
      <button type="button" className="form-block__btn">Add Task</button>
    </form>
  );
}

export default Input;
