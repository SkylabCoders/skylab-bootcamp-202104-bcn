import React from 'react';
import AddTask from './AddTask';
import tasks from '../../constants/tasks.mock';

const ShowList = () => (
  <div className="tasks-list">
    <h2>To Do List</h2>
    <ul>
      {tasks.map((task) => (
        <li className="task">
          {task.id}
          {' '}
          {task.task}
          <button className="task__delete-button" type="button" onClick={() => console.log(`delete task ${task.id}`)}>-</button>
          <button className="task__delete-button" type="button" onClick={() => console.log(`upgrade task ${task.id}`)}>PUT</button>
        </li>
      ))}
    </ul>
    <AddTask />
  </div>
);

export default ShowList;
