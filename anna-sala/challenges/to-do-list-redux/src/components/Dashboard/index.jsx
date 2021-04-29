import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { PropTypes } from 'prop-types';
import { loadTasks, deleteTask } from '../../redux/actions/actionCreators';

function Dashboard({ tasks, dispatch }) {
  useEffect(() => {
    if (!tasks.length) dispatch(loadTasks());
  }, []);
  function deleteClick(id) {
    dispatch(deleteTask(id));
  }
  return (
    <>
      <ul className="to-do-list">
        {tasks.map((task) => (
          <li className="to-do-list__task">
            {' '}
            <Link to={`/${task.id}`} className="task-name">{task.taskName}</Link>
            <button
              type="button"
              className="delete"
              onClick={() => deleteClick(task.id)}
            >
              X
            </button>
          </li>
        ))}
      </ul>
    </>
  );
}
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
