import React from 'react';
import TASKS from '../constants/TASKS';

const TasksList = () => (
  <ul className="task-list">
    {
    TASKS.map(({ task }) => (
      <li className="task-item">{task}</li>
    ))
      }
  </ul>
);
export default TasksList;
