/* eslint-disable no-underscore-dangle */
import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';
import {
  loadTasks, deleteTask, updateTask
} from '../../redux/actions/actionCreators';
import './list.css';

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
      <h1 className="list-tittle">My tasks</h1>
      <ul className="products-list">
        {
          tasks?.map((task) => (
            <li className="products-list__product">
              <span className="product-name">
                {task.title}
              </span>
              <span className="product-cost">
                {task.description}
              </span>
              <button
                type="button"
                className="button-add"
                onClick={() => handleDelete(task._id)}
              >
                -
              </button>
              {activeTask === task._id
                ? (
                  <>
                    <input
                      type="text"
                      onChange={handleTitleChange}
                      placeholder="Title"
                    />
                    <input
                      type="text"
                      onChange={handleDescriptionChange}
                      placeholder="Description"
                    />
                    <button
                      type="button"
                      onClick={() => handleEditTask(task)}
                    >
                      Submit
                    </button>
                  </>
                )
                : (
                  <button
                    type="button"
                    className="button-add"
                    onClick={() => handleEditOpened(task._id)}
                  >
                    Edit
                  </button>
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
