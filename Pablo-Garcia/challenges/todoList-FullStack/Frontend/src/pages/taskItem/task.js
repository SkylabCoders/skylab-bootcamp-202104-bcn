/* eslint-disable no-underscore-dangle */
import React from 'react';
import { Link } from 'react-router-dom';
import { PropTypes } from 'prop-types';
import { AiFillDelete } from 'react-icons/ai';
import CardTask from './style';

const Task = ({ task, handleDelete }) => (
  <CardTask key={task._id} className="task">
    <div className="task__content">
      <Link to={`tasks/${task._id}`}>
        <h3 className="titleTask">{task.task}</h3>
        <p className="titleTask">{task.description_task}</p>
        {
             task.done !== true
               ? <span className="pending"> Pending </span>
               : null
            }
        <span>{task.done}</span>
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
          <AiFillDelete />
        </button>
      )}
    </div>
  </CardTask>
);

Task.propTypes = {
  task: PropTypes.shape({
    _id: PropTypes.string,
    task: PropTypes.string,
    description_task: PropTypes.string,
    description: PropTypes.string,
    done: PropTypes.bool
  }).isRequired,
  // eslint-disable-next-line react/require-default-props
  handleDelete: PropTypes.func
};

export default Task;
