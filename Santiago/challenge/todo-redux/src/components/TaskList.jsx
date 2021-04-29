import React from 'react';
import TASKS from '../constants/task-mock';

const TaskList = () => (

  <div>
    <ul>
      {TASKS.map((task) => (
        <li>
          {task.task}
          <button type="button">DELETE</button>
          <button type="button">DONE</button>
        </li>
      ))}
    </ul>
  </div>
);

export default TaskList;
