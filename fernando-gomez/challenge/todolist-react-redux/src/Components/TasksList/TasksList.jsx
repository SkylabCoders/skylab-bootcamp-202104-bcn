/* eslint-disable react/prop-types */
import React, { useEffect, useState } from 'react';
import './form.css';
import { connect } from 'react-redux';
import {
  loadTasks, addTask, deleteTask, editTask, deleteSeveralTasks,
} from '../../redux/actions/actionCreator';

const TasksList = ({ tasks = [], dispatch }) => {
  const [taskInput, setTaskInput] = useState();
  const [newDescription, setNewDescription] = useState();
  let checkedArray = [];

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

  const handleModify = (taskId) => {
    const newTask = {
      id: taskId,
      description: newDescription,
    };
    dispatch(editTask(newTask));
  };

  const handleInputChange = (event) => {
    setTaskInput(event.target.value);
  };

  const handleDescriptionChangeInput = (event) => {
    setNewDescription(event.target.value);
  };

  const handleCheckBoxSelected = (idChecked) => {
    if (!checkedArray.some((id) => id === idChecked)) {
      checkedArray.push(idChecked);
    } else {
      checkedArray = checkedArray.filter((id) => id !== idChecked);
    }
  };

  const handleDeleteSeveral = () => {
    if (checkedArray.length) {
      dispatch(deleteSeveralTasks(checkedArray));
    }
    checkedArray = [];
  };

  useEffect(() => {
    if (!tasks.length) dispatch(loadTasks());
  });

  return (
    <section className="tasks-list">
      <div className="tasks-list__main-features main-features">
        <input
          type="text"
          placeholder="Your new task"
          onChange={handleInputChange}
        />
        <button type="button" onClick={handleAdd}>Add</button>
        <button type="button" onClick={handleDeleteSeveral}>Delete Several</button>
      </div>
      <ul className="tasks-list__list list">
        <li className="list__element">
          {tasks.map((task) => (
            <span key={task.id}>
              <p className="task">
                <input
                  type="checkbox"
                  onChange={() => handleCheckBoxSelected(task.id)}
                />
                {task.id}
                {' '}
                -
                {' '}
                {task.description}
              </p>
              <button type="button" onClick={() => handleDelete(task.id)}>Delete</button>
              <button type="button" onClick={() => handleModify(task.id)}>Modify</button>
              <input
                type="text"
                placeholder="Modify"
                onChange={handleDescriptionChangeInput}
              />
            </span>
          ))}
        </li>
      </ul>
    </section>
  );
};

const mapStateToProps = (store) => ({
  tasks: store.tasks,
});

export default connect(mapStateToProps)(TasksList);
