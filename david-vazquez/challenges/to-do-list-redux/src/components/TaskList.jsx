import React from 'react';
import TASKS from '../constants/task.mock';

function TaskList() {
  return (
    <ul>
      {TASKS.map((task) => <li>{task.text}</li>)}
    </ul>
  );
}

export default TaskList;
