import React from 'react';
import TASKS from '../constant/task-mock';

function TaskList() {
  return (
    <ul>
      {TASKS.map((task) => (
        <li>
          {task.text}
          <button type="button">Delete</button>
          <button type="button">Done</button>
        </li>
      ))}
    </ul>
  );
}

export default TaskList;
