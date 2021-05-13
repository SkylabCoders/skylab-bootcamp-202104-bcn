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
      <ul className="list">
        {
          tasks?.map((task) => (
            <li className="list__element list-element">
              <span className="list-element__title">
                {task.title}
              </span>
              <span className="list-element__description">
                {task.description}
              </span>
              {activeTask === task._id
                ? (
                  <>
                    <span className="inputs">
                      <input
                        type="text"
                        onChange={handleTitleChange}
                        placeholder="Title"
                        className="inputs__edit-title"
                      />
                      <input
                        type="text"
                        onChange={handleDescriptionChange}
                        placeholder="Description"
                        className="inputs__edit-description"
                      />
                    </span>
                    <span className="buttons">
                      <button
                        type="button"
                        onClick={() => handleEditTask(task)}
                        className="buttons__submit"
                      >
                        Submit
                      </button>
                      <button
                        type="button"
                        onClick={handleHideEditTask}
                        className="buttons__hide"
                      >
                        ^
                      </button>
                    </span>
                  </>
                )
                : (
                  <div className="buttons">
                    <button
                      type="button"
                      onClick={() => handleDelete(task._id)}
                      className="buttons__delete"
                    >
                      -
                    </button>
                    <button
                      type="button"
                      className="buttons__edit"
                      onClick={() => handleEditOpened(task._id)}
                    >
                      Edit
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
  tasks: PropTypes.shape([]).isRequired,
  dispatch: PropTypes.func.isRequired
};

function mapStateToProps({ tasks }) {
  return {
    tasks
  };
}

export default connect(mapStateToProps)(TasksList);
