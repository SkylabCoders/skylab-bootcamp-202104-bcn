/* eslint-disable no-underscore-dangle */
/* eslint-disable no-console */
/* eslint-disable no-debugger */
import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';
import { loadTasks } from '../../redux/actions/actionCreators';
import Task from '../Task';
import './styles.css';

const Dashboard = ({ tasks, dispatch }) => {
  useEffect(() => {
    if (!tasks.length) dispatch(loadTasks());
  }, []);

  return (
    <>
      <div className="dashboard">
        <h2>Dashboard</h2>
      </div>
      <div className="pendingTasks">
        <h3>Tasks list</h3>
        {tasks.map((task) => <Task task={task} key={task._id} />)}
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
