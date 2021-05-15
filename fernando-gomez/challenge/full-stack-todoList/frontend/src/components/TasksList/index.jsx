/* eslint-disable no-underscore-dangle */
import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';
import {
  loadTasks, deleteTask, updateTask
} from '../../redux/actions/actionCreators';
import './task.css';

function TasksList({ tasks, dispatch }) {
  const [activeTask, setActiveTask] = useState(null);
  const [currentTitle, setCurrentTitle] = useState('');
  const [currentDescription, setCurrentDescription] = useState('');

  useEffect(() => {
    if (!tasks.length) dispatch(loadTasks());
  }, []);

  const handleDelete = (taskId) => {
    dispatch(deleteTask(taskId));
  };

  const handleHideEditTask = () => {
    setActiveTask(null);
  };

  const handleDone = (task) => {
    dispatch(updateTask({
      ...task,
      done: !task.done
    }));
  };

  const handleEditTask = (task) => {
    dispatch(updateTask(
      {
        ...task,
        title: currentTitle,
        description: currentDescription
      }
    ));
    setActiveTask(null);
  };

  const handleEditOpened = (taskId) => {
    setActiveTask(taskId);
  };

  const handleTitleChange = (event) => {
    setCurrentTitle(event.target.value);
  };

  const handleDescriptionChange = (event) => {
    setCurrentDescription(event.target.value);
  };

  return (
    <>
      <h2 className="title">My tasks</h2>
      <ul
        className="list"
      >
        {
          tasks?.map((task) => (
            <li
              // eslint-disable-next-line prefer-template
              // eslint-disable-next-line no-useless-concat
              key={`task-${task._id}`}
              className="list__element list-element "
            >
              <div className="task-content">
                {task.done ? (<i className="fas fa-star" />) : <i className="fas fa-star transparent" />}
                <div className="task-content__container">
                  <span className="task-content__title">
                    {task.title}
                  </span>
                  <span className="task-content__description">
                    {task.description}
                  </span>
                </div>
              </div>
              {activeTask === task._id
                ? (
                  <>
                    <span className="inputs">
                      <input
                        type="text"
                        onChange={handleTitleChange}
                        placeholder="Title"
                        className="inputs__edit-title"
                        // eslint-disable-next-line prefer-template
                        data-testid={'title-input-' + task._id}
                      />
                      <input
                        type="text"
                        onChange={handleDescriptionChange}
                        placeholder="Description"
                        className="inputs__edit-description"
                        // eslint-disable-next-line prefer-template
                        data-testid={'description-input-' + task._id}
                      />
                    </span>
                    <span className="buttons">
                      <button
                        type="button"
                        onClick={() => handleEditTask(task)}
                        className="buttons__submit"
                        // eslint-disable-next-line prefer-template
                        data-testid={'submit-edit-' + task._id}
                      >
                        <i className="fas fa-save" />
                      </button>
                      <button
                        type="button"
                        onClick={handleHideEditTask}
                        className="buttons__hide"
                        // eslint-disable-next-line prefer-template
                        data-testid={'hide-' + task._id}
                      >
                        <i className="fas fa-undo-alt" />
                      </button>
                    </span>
                  </>
                )
                : (
                  <div className="buttons">
                    <button
                      type="button"
                      className="buttons__done"
                      onClick={() => handleDone(task)}
                      // eslint-disable-next-line prefer-template
                      data-testid={'done-' + task._id}
                    >
                      <i className="fas fa-check-circle" />
                    </button>
                    <button
                      type="button"
                      className="buttons__edit"
                      onClick={() => handleEditOpened(task._id)}
                      // eslint-disable-next-line prefer-template
                      data-testid={'edit-' + task._id}
                    >
                      {task.done ? (<></>) : (<i className="far fa-edit" />)}
                    </button>
                    <button
                      type="button"
                      onClick={() => handleDelete(task._id)}
                      className="buttons__delete"
                      // eslint-disable-next-line prefer-template
                      data-testid={'delete-' + task._id}
                    >
                      <i className="fas fa-trash" />
                    </button>
                  </div>
                )}
            </li>
          ))
        }
      </ul>
    </>
  );
}

TasksList.propTypes = {
  tasks: PropTypes.arrayOf(PropTypes.shape({
    length: PropTypes.number
  })).isRequired,
  dispatch: PropTypes.func.isRequired
};

function mapStateToProps({ tasks }) {
  return {
    tasks
  };
}

export default connect(mapStateToProps)(TasksList);
