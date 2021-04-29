import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { addTask, deleteTask, loadTasks } from '../../redux/actions/actionCreator';

import './ToDoList.css';

function ToDoList({ tasks, dispatch }) {
  useEffect(() => {
    if (!tasks.length) dispatch(loadTasks());
  }, []);

  const [newestTask, setNewestTask] = useState(null);

  const handleDelete = (taskId) => {
    dispatch(deleteTask(taskId));
  };

  const handleAddTask = () => {
    let newId = 1;
    if (tasks.length !== 0) newId = tasks[tasks.length - 1].id + 1;
    const task = {
      id: newId,
      name: newestTask
    };
    dispatch(addTask(task));
  };

  function taskInputCreation(event) {
    setNewestTask(event.target.value);
  }

  return (
    <>
      <div className="inputTask">
        <label htmlFor="taskInputCreation">
          <input onChange={taskInputCreation} placeholder="New task..." />
          <button type="button" className="addTask" onClick={() => handleAddTask()}> </button>
        </label>
      </div>
      <ul>
        {tasks.map((task) => (
          <label htmlFor="taskTrashCreation">
            <li className="listOfTasks">
              {task.name}
              <button type="button" className="deleteTask" onClick={() => handleDelete(task.id)}> </button>
            </li>
          </label>
        ))}
      </ul>
    </>
  );
}
ToDoList.propTypes = {
  tasks: PropTypes.shape([]).isRequired,
  dispatch: PropTypes.func.isRequired
};

function mapStateToProps(taskStore) {
  return {
    tasks: taskStore.tasks
  };
}

export default connect(mapStateToProps)(ToDoList);
