/* eslint-disable no-underscore-dangle */
import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Link } from 'react-router-dom';
import { PropTypes } from 'prop-types';
import './task.css';
import { deleteTask } from '../../redux/actions/actionCreators';

const Task = ({ task, actions }) => {
  const handleDelete = () => {
    actions.deleteTask(task._id);
  };

  return (
    <div key={task._id} className="task">
      <div className="task__text">
        <Link to={`/tasks/${task._id}`}>
          <h4 className={task.done ? 'done' : ''}>{task.title}</h4>
          <p>{task.description}</p>
        </Link>
      </div>
      <div className="task__actions">
        {handleDelete && (
        <button
          className="delete"
          title="delete task"
          type="button"
          onClick={() => handleDelete(task._id)}
        >
          x
        </button>
        )}

      </div>
    </div>
  );
};

Task.propTypes = {
  task: PropTypes.shape({
    _id: PropTypes.string,
    done: PropTypes.bool,
    title: PropTypes.string,
    description: PropTypes.string,
  }).isRequired,
  actions: PropTypes.shape({
    deleteTask: PropTypes.func.isRequired,
  }).isRequired,
};

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(
      { deleteTask },
      dispatch,
    ),
  };
}

export default connect(null, mapDispatchToProps)(Task);
