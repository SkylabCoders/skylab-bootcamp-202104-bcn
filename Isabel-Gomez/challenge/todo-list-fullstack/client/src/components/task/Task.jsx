/* eslint-disable no-underscore-dangle */
/* eslint-disable no-debugger */
import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { loadTasks, addTask, deleteTask } from '../../redux/actions/actionCreators';
import './task.css';

const Task = ({ dispatch, tasks }) => {
// getAll Tasks //

  useEffect(() => {
    if (!tasks?.length) dispatch(loadTasks());
  }, []);

  // Create new Task //

  const [nameNewTask, setNameNewTask] = useState('');

  const getImputTask = (event) => {
    setNameNewTask(event.target.value);
  };

  const handleAddTask = () => {
    const newTask = {
      name: nameNewTask,
      completed: false,
    };
    dispatch(addTask(newTask));
  };

  // Delete Task //

  const handleDeleteTask = (taskId) => {
    dispatch(deleteTask(taskId));
  };

  return (
    <>
      <section>
        <label htmlFor="task-name" className="label-create">
          <input id="task-name" onChange={getImputTask} placeholder="Add your task here..." className="label-create__input" />
          <button
            type="button"
            onClick={() => handleAddTask()}
            className="label-create__button"
          >
            Add task
          </button>
        </label>
      </section>
      <section className="list">
        <ul className="list-container">
          {tasks?.map((element) => (
            <li key={tasks.name} className="list-container__item">
              {element.name}
              <div className="list-container__item-div">
                <button type="button" className="list__finished-button">
                  <i className="far fa-check-circle" />
                </button>
                <button type="button" className="list__edit-button">
                  <i className="far fa-edit" />
                </button>
                <button
                  type="button"
                  className="list__delete-button"
                  id={element._id}
                  onClick={() => handleDeleteTask(element._id)}
                >
                  <i className="far fa-trash-alt" />
                </button>
              </div>
            </li>
          ))}
        </ul>
      </section>
    </>
  );
};

Task.propTypes = {
  dispatch: PropTypes.func.isRequired,
  tasks: PropTypes.shape([]).isRequired,
};

const mapStateToProps = (store) => ({
  tasks: store.tasks,
});

export default connect(mapStateToProps)(Task);
