/* eslint-disable react/prop-types */
import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { loadTasks, addTask, deleteTask } from '../redux/actions/actionCreator';

const TasksList = ({ tasks = [], dispatch }) => {
  const handleAdd = () => {
    let newId = 1;

    if (tasks.length !== 0) newId = tasks[tasks.length - 1].id + 1;

    const newTask = {
      id: newId,
      description: 'hola',
    };
    dispatch(addTask(newTask));
  };

  const handleDelete = (taskId) => {
    dispatch(deleteTask(taskId));
  };

  useEffect(() => {
    if (!tasks.length) dispatch(loadTasks());
  });
  return (
    <>
      {tasks.map((task) => (
        <>

          <p>
            {task.id}
            {' '}
            -
            {' '}
            {task.description}
          </p>
          <button type="button" onClick={handleAdd}>Add</button>
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
