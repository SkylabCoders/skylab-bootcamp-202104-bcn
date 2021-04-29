/* eslint-disable react/prop-types */
import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { loadTasks, addTask, deleteTask } from '../redux/actions/actionCreator';

const TasksList = ({ tasks = [], dispatch }) => {
  const [taskInput, setTaskInput] = useState();

  const handleAdd = () => {
    let newId = 1;

    if (tasks.length !== 0) newId = tasks[tasks.length - 1].id + 1;

    const newTask = {
      id: newId,
      description: taskInput,
    };
    dispatch(addTask(newTask));
  };

  const handleDelete = (taskId) => {
    dispatch(deleteTask(taskId));
  };

  const handleInputChange = (event) => {
    setTaskInput(event.target.value);
  };

  useEffect(() => {
    if (!tasks.length) dispatch(loadTasks());
  });
  return (
    <>
      <input
        type="text"
        placeholder="Your new task"
        onChange={handleInputChange}
      />
      <button type="button" onClick={handleAdd}>Add</button>

      {tasks.map((task) => (
        <>

          <p>
            {task.id}
            {' '}
            -
            {' '}
            {task.description}
          </p>
          <button type="button" onClick={() => handleDelete(task.id)}>Delete</button>
        </>
      ))}
    </>
  );
};

const mapStateToProps = (store) => ({
  tasks: store.tasks,
});

export default connect(mapStateToProps)(TasksList);
