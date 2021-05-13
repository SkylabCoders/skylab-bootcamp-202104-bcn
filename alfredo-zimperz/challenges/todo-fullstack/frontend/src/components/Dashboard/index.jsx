import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';
import { loadTasks } from '../../redux/actions/actionCreators';
import Task from '../Task';
import './dashboard.css';

const Dashboard = ({ tasks, dispatch }) => {
  useEffect(() => {
    if (!tasks.length) dispatch(loadTasks());
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
        {pendingTasks.map((task) => <Task task={task} key={task.id} />)}
      </div>
    </>
  );
};

Dashboard.propTypes = {
  tasks: PropTypes.arrayOf(
    PropTypes.shape({
      code: PropTypes.string,
      id: PropTypes.number,
    }),
  ).isRequired,
  dispatch: PropTypes.func.isRequired,
};

function mapStateToProps(store) {
  return {
    tasks: store.tasks,
  };
}

export default connect(mapStateToProps)(Dashboard);
