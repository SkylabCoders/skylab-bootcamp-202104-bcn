import React from 'react';
import TaskList from './TaskList';

function InputTask() {
  return (
    <>
      <div>
        <label htmlFor="input-task">
          Tarea nueva
          <input type="text" id="input-task" value="" placeholder="Introduce tu tarea" />
          <button type="button">Añadir</button>
        </label>
        <TaskList />
      </div>
    </>
  );
}

export default InputTask;
