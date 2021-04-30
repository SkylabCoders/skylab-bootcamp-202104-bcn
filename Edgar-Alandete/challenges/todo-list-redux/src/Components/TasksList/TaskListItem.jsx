import React from 'react';

const TaskListItem = (task) => {
  (
    <li key={`${task.taskId}`}>
      {' '}
      {task.value}
      {' '}
    </li>
  );
};

export default TaskListItem;
