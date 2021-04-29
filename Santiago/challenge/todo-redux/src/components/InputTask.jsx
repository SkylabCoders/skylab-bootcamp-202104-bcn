import React from 'react';

const InputTask = () => (
  <div>
    <label htmlFor="task-input">
      ADD YOUR TASK:
      <input type="text" id="task-input" placeholder="Ex. Walk the dog" />
      <button type="button">ADD</button>
    </label>
  </div>
);

export default InputTask;
