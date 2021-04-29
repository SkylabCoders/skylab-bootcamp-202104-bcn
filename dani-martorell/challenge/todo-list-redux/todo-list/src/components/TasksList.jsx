import React from 'react';
import TASKS from '../constants/TASKS';

const TasksList = () => (
  <ul className="task-list">
    {
    TASKS.map(({ task }) => (
      <li className="task-item">
        {task}
        <div className="task-item__buttons">
          <button type="button">Delete</button>
          <button type="button">Done</button>
        </div>
      </li>
    ))
      }
  </ul>
);
export default TasksList;
