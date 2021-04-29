import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { addTask, deleteTask, loadTasks } from '../../redux/actions/actionCreator';
import './ToDoList.css';

function ToDoList({ tasks, dispatch }) {
  useEffect(() => {
    if (!tasks.length) dispatch(loadTasks());
  }, []);

  const handleDelete = (taskId) => {
    dispatch(deleteTask(taskId));
  };

  const handleAddTask = (task) => {
    const inputNewTask = document.getElementById('taskInputCreation');
    const newTask = { id: (task[task.length - 1].id + 1), name: inputNewTask.value };
    dispatch(addTask(newTask));
  };

  return (
    <>
      <div className="inputTask">
        <label htmlFor="taskInputCreation">
          <input type="text" id="taskInputCreation" placeholder="New task..." />
          <button type="button" className="addTask" onClick={() => handleAddTask(tasks)}> </button>
        </label>
      </div>
      <ul>
        {tasks.map((task) => (
          <label htmlFor="taskTrashCreation">
            <li className="listOfTasks">
              {task.id}
              {'   '}
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
