import React from 'react';
import TASKS from '../constants/task.mock';

function InputTask() {
  return (
    <div>
      <label htmlFor="input-task">
        Introduce tu tarea:
        <input type="text" id="input-task" value="" placeholder="Introduce tu tarea" />
        <button type="button">Añadir</button>
      </label>
      <ul>
        <h2>List of task: </h2>
        {TASKS.map((task) => (
          <li>
            {task.text}
            <button type="button">DONE</button>
            <button type="button">DELETE</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default InputTask;
