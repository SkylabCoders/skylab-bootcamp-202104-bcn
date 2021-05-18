/* eslint-disable no-underscore-dangle */
import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { loadTasks, addTask, deleteTask } from '../../redux/actions/actionCreator';
import './style/style.css';

function TasksTodo({
  dispatch, tasks
}) {
  const [taskName, setTaskName] = useState();

  useEffect(() => {
    if (!tasks.length) dispatch(loadTasks());
  }, []);

  function handleClickAddTask() {
    dispatch(addTask({ name: taskName }));
  }

  return (
    <>
      <div className="windows-container">
        <div className="header-container">
          <h1 className="header-container__title">to do list</h1>
          <button className="header-container__button" type="button">x</button>
        </div>
        <div className="task-container">
          <input className="task-container__input" placeholder="Task to do" type="text" value={taskName} onChange={(event) => setTaskName(event.target.value)} />
          <button className="task-container__button" type="button" onClick={() => handleClickAddTask()}>add</button>
        </div>
        <div className="list-container">
          <ul className="list-container__ul">
            {
          tasks?.map((item) => (
            <li className="list-container__list">
              {item.name}
              {' '}
              <button className="list-container__button" type="button" onClick={() => dispatch(deleteTask(item._id))}>delete</button>
            </li>
          ))
          }
          </ul>
        </div>
        <footer className="footer-container">Finestra ©</footer>
      </div>
    </>
  );
}

TasksTodo.propTypes = {
  dispatch: PropTypes.func.isRequired,
  tasks: PropTypes.shape([{}]).isRequired
};

function mapStateToProps({ tasks }) {
  return {
    tasks
  };
}

export default connect(mapStateToProps)(TasksTodo);
