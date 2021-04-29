import React from 'react';

const InputComponent = () => (
  <label htmlFor="input-task">
    <input type="text" id="input-task" placeholder="Write your task" />
    <button type="button">Add</button>
  </label>
);

export default InputComponent;
