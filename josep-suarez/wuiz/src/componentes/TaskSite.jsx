/* eslint-disable no-console */
import React from 'react';
import { connect } from 'react-redux';
import tasks from '../services/index';

function TaskSite() {
  return tasks.map((task) => (
    <>
      <p>
        {task.id}
        -
        {task.task}
      </p>
      <button type="button">Delete</button>
      <button type="button">Modify</button>
    </>
  ));
}

function mapStateToProps(store) {
  return {
    tasks: store.tasks
  };
}

export default connect(mapStateToProps)(TaskSite);
