import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';
import { loadTasks, deleteTask, addTask } from '../redux/actions/actionCreators';

const InputTask = ({ tasks, dispatch }) => {
  useEffect(() => {
    if (!tasks.length) dispatch(loadTasks());
  }, []);

  const [newestTask, setNewestTask] = useState();

  function handleDelete(taskId) {
    dispatch(deleteTask(taskId));
  }

  const handleAdd = () => {
    let newId = 1;

    if (tasks.length !== 0) newId = tasks[tasks.length - 1].id + 1;

    const newTask = {
      id: newId,
      task: newestTask
    };
    dispatch(addTask(newTask));
  };

  function obtainTask(event) {
    setNewestTask(event.target.value);
  }

  return (
    <div>
      <div>
        <label htmlFor="task-input">
          ADD YOUR TASK:
          <input type="text" id="task-input" onChange={obtainTask} placeholder="Ex. Walk the dog" />
          <button type="button" onClick={() => handleAdd()}>ADD</button>
        </label>
      </div>
      <ul>
        {tasks.map((task) => (
          <li>
            {task.task}
            <button type="button" onClick={() => handleDelete(task.id)}>DELETE</button>
            <button type="button">DONE</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

InputTask.propTypes = {
  tasks: PropTypes.shape([]).isRequired,
  dispatch: PropTypes.func.isRequired
};

function mapStateToProps(tasks) {
  return { tasks };
}

export default connect(mapStateToProps)(InputTask);
