/* eslint-disable no-underscore-dangle */
/* eslint-disable no-debugger */
import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {
  loadTasks, addTask, deleteTask, doneTask,
} from '../../redux/actions/actionCreators';
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
    setNameNewTask('');
  };

  // Delete Task //

  const handleDeleteTask = (taskId) => {
    dispatch(deleteTask(taskId));
  };

  // Update Task //

  const handleDoneTask = (taskId) => {
    dispatch(doneTask(taskId));
  };

  return (
    <>
      <section>
        <label htmlFor="task-name" className="label-create">
          <input id="task-name" onChange={getImputTask} value={nameNewTask} placeholder="Add your task here..." className="label-create__input" />
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
            <li key={element.id} className={!element.completed ? 'list-container__item' : 'list-container__item--done'}>
              {element.name}
              <div className="list-container__item-div">
                <button
                  type="button"
                  disabled={!!element.completed}
                  className={!element.completed ? 'list__finished-button' : 'bloqued'}
                  onClick={() => handleDoneTask(element._id)}
                >
                  <i className="far fa-check-circle" />
                </button>
                <button
                  type="button"
                  className="list__edit-button"
                >
                  <i className="far fa-edit" />
                </button>
                <button
                  type="button"
                  className="list__delete-button"
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
