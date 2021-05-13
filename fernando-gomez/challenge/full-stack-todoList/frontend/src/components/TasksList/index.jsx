/* eslint-disable no-underscore-dangle */
import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';
import {
  loadTasks, deleteTask, updateTask
} from '../../redux/actions/actionCreators';
import './task.css';
import done from '../../images/check-circle-solid.svg';
import trash from '../../images/trash-alt-solid.svg';
import edit from '../../images/edit-regular.svg';
import back from '../../images/undo-alt-solid.svg';
import submit from '../../images/code-branch-solid.svg';

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
      <ul className="list">
        {
          tasks?.map((task) => (
            <li className="list__element list-element ">
              <div className="task-content">
                <span className="task-content__title">
                  {task.title}
                </span>
                <span className="task-content__description">
                  {task.description}
                </span>
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
                        <img
                          src={submit}
                          alt="Submit"
                        />
                      </button>
                      <button
                        type="button"
                        onClick={handleHideEditTask}
                        className="buttons__hide"
                      >
                        <img
                          src={back}
                          alt="Back"
                        />
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
                    >
                      <img
                        src={done}
                        alt="Done"
                      />
                    </button>
                    <button
                      type="button"
                      className="buttons__edit"
                      onClick={() => handleEditOpened(task._id)}
                    >
                      <img
                        src={edit}
                        alt="Edit"
                      />
                    </button>
                    <button
                      type="button"
                      onClick={() => handleDelete(task._id)}
                      className="buttons__delete"
                    >
                      <img
                        src={trash}
                        alt="Delete"
                      />
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
