import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { PropTypes } from 'prop-types';

function Dashboard({ tasks }) {
  return (
    <ul>
      {tasks.map((task) => (
        <li>
          {' '}
          <Link to={`/detail/${task.id}`}>{task.taskName}</Link>
        </li>
      ))}
    </ul>
  );
}
Dashboard.propTypes = {
  tasks: PropTypes.shape([]).isRequired,
  // dispatch: PropTypes.func.isRequired,
};

function mapStateToProps(store) {
  return {
    tasks: store.tasks,
  };
}
export default connect(mapStateToProps)(Dashboard);
