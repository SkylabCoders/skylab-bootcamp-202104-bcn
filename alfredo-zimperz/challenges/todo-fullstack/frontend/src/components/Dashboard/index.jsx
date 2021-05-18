/* eslint-disable no-underscore-dangle */
import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';
import { loadTasks } from '../../redux/actions/actionCreators';
import Task from '../Task';
import './dashboard.css';

const Dashboard = ({ tasks, dispatch }) => {
  useEffect(() => {
    dispatch(loadTasks());
  }, []);

  const pendingTasks = tasks.filter((task) => !task.done);

  return (
    <>
      <div className="dashboard">
        <h2>Dashboard</h2>
        <p>
          Total tasks:
          {' '}
          {tasks.length}
        </p>
        <p>
          Pending tasks:
          {' '}
          {pendingTasks.length}
        </p>
      </div>
      <div className="pendingTasks">
        <h3>Pending tasks</h3>
        {pendingTasks.map((task) => <Task task={task} key={task._id} />)}
      </div>
    </>
  );
};

Dashboard.propTypes = {
  tasks: PropTypes.arrayOf(
    PropTypes.shape({
      _id: PropTypes.string,
    }),
  ).isRequired,
  dispatch: PropTypes.func.isRequired,
};

function mapStateToProps({ tasks }) {
  return {
    tasks,
  };
}

export default connect(mapStateToProps)(Dashboard);
