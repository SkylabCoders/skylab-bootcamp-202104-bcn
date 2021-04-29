import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';
import { loadTasks } from '../../redux/actions/actionCreators';
import './dashboard.css';

const Dashboard = ({ tasks, dispatch }) => {
  useEffect(() => {
    if (!tasks.length) dispatch(loadTasks());
  }, []);

  return (
    <>
      <h2>Older Tasks</h2>
      <div className="tasks-menu">
        {tasks.slice(1, 5).map(({
          id, title, description, done,
        }) => (
          <Link to={`/tasks/${id}`} key={id}>
            {`${title}, ${description}, done: ${done}`}
          </Link>
        ))}

      </div>
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
