/* eslint-disable no-console */
/* eslint-disable no-debugger */
import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';
import { loadTasks } from '../../redux/actions/actionCreators';
import Task from '../Task';

const Dashboard = ({ tasks, dispatch }) => {
  debugger;
  useEffect(() => {
    if (!tasks.length) dispatch(loadTasks());
  }, []);

  console.log(tasks[0]?.task);
  // const pendingTasks = tasks.filter((task) => !task.done);
  return (
    <>
      <div className="dashboard">
        <h2>Dashboard</h2>
      </div>
      <div className="pendingTasks">
        <h3>Tasks list</h3>
        {tasks.map((task) => <Task task={task} />)}
      </div>
    </>
  );
};

Dashboard.propTypes = {
  tasks: PropTypes.shape([]).isRequired,
  dispatch: PropTypes.func.isRequired
};

function mapStateToProps(store) {
  return {
    tasks: store.tasks
  };
}

export default connect(mapStateToProps)(Dashboard);
