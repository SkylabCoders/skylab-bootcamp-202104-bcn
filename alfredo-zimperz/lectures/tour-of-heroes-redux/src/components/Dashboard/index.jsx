import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';
import { loadTasks } from '../../redux/actions/actionCreators';
import './dashboard.css';

const Dashboard = ({ tasks, dispatch }) => {
  useEffect(() => {
    if (!tasks.length) dispatch(loadTasks());
  }, []);

  const pendingTasks = tasks.filter((task) => !task.done).length;

  return (
    <>
      <h2>Dashboard</h2>
      <h3>
        Total tasks:
        {' '}
        {tasks.length}
      </h3>
      <h3>
        Pending tasks:
        {' '}
        {pendingTasks}
      </h3>
    </>
  );
};

Dashboard.propTypes = {
  tasks: PropTypes.shape([]).isRequired,
  dispatch: PropTypes.func.isRequired,
};

function mapStateToProps(store) {
  return {
    tasks: store.tasks,
  };
}

export default connect(mapStateToProps)(Dashboard);
