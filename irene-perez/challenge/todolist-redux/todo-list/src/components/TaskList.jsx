import React from 'react';
import { PropTypes } from 'prop-types';
import { connect } from 'react-redux';
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

TaskList.protoType = {
  tasks: PropTypes.shape([]).isRequired,
  dispatch: PropTypes.func.isRequired
};

function mapStateToProps(store) {
  return {
    tasks: store.tasks
  };
}

export default connect(mapStateToProps)(TaskList);
