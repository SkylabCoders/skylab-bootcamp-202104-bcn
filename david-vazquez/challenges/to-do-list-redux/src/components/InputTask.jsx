import React, { useEffect, useState } from 'react';
import { PropTypes } from 'prop-types';
import { connect } from 'react-redux';
import { loadTasks, deleteTask, addTask } from '../redux/actions/actionCreator';

function InputTask({ tasks, dispatch }) {
  const [taskText, setTaskText] = useState();
  useEffect(() => {
    if (!tasks.length) dispatch(loadTasks());
  });

  function handleAdd() {
    let newId = 1;
    if (tasks.length !== 0) newId = tasks[tasks.length - 1].id + 1;
    const newTask = {
      id: newId,
      text: taskText,
    };
    dispatch(addTask(newTask));
  }
  function getTask(event) {
    setTaskText(event.target.value);
  }

  function selectDeleteTask(id) {
    dispatch(deleteTask(id));
  }
  return (
    <div>
      <label htmlFor="input-task">
        Introduce tu tarea:
        <input id="input-task" onChange={getTask} />
        <button type="button" onClick={() => handleAdd()}>Añadir</button>
      </label>
      <ul className="task-list">
        <h2>List of task: </h2>
        {tasks.map((task) => (
          <li className="task-item">
            {task.text}
            <button type="button">DONE</button>
            <button type="button" onClick={() => selectDeleteTask(task.id)}>DELETE</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

InputTask.propTypes = {
  tasks: PropTypes.shape([]).isRequired,
  dispatch: PropTypes.func.isRequired,
};

function mapStateToProps(tasks) {
  return {
    tasks,
  };
}

export default connect(mapStateToProps)(InputTask);
