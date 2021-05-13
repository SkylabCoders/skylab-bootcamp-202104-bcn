/* eslint-disable no-debugger */
import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';
import { loadTasks, addTask, deleteTask } from '../../redux/actions/actionCreators';
import Task from '../Task';

const Tasks = ({ tasks, dispatch }) => {
  const [newTaskTitle, setNewTaskTitle] = useState();

  useEffect(() => {
    if (!tasks.length) dispatch(loadTasks());
  }, []);

  const handleChangeInput = (event) => {
    setNewTaskTitle(event.target.value);
  };
  const saveNewTask = () => {
    if (newTaskTitle) {
      dispatch(addTask({ task: newTaskTitle }));
    }
  };
  const handleDelete = (id) => dispatch(deleteTask(id));

  return (
    <>
      <h2 className="hidden">My Tasks</h2>
      <section className="new-task">
        <h3>Edit tasks</h3>
        <label htmlFor="new-task-title" id="new-task-title">
          <span>Title:</span>
          <input
            name="title"
            value={newTaskTitle}
            onChange={handleChangeInput}
          />
        </label>
        <button className="add-button" type="button" onClick={saveNewTask}>
          Add task
        </button>
      </section>
      <section className="tasks">
        {tasks.map((task) => (
          <Task task={task} handleDelete={handleDelete} />
        ))}
      </section>
    </>
  );
};

Tasks.propTypes = {
  dispatch: PropTypes.func.isRequired,
  tasks: PropTypes.shape([]).isRequired
};

function mapStateToProps({ tasks }) {
  return { tasks };
}

export default connect(mapStateToProps)(Tasks);
