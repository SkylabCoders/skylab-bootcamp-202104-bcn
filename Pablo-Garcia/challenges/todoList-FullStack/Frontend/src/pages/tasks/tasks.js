/* eslint-disable no-underscore-dangle */
import React, { useState, useEffect } from 'react';
import { PropTypes } from 'prop-types';
import { connect } from 'react-redux';
import { createOne, deleteTask, getTask } from '../../common/actions/actionCreators';
import Task from '../taskItem/task';

const Tasks = ({ tasks, dispatch }) => {
  const [newTask, setNewTask] = useState('');
  const [newDescriptionTask, setDescriptionTask] = useState('');

  useEffect(() => {
    if (!tasks.length) dispatch(getTask());
  }, []);

  const handleChangeInput = (event) => {
    if (event.target.name === 'titleTask') {
      setNewTask(event.target.value);
    }
    if (event.target.name === 'description_task') {
      setDescriptionTask(event.target.value);
    }
  };

  const saveTask = () => {
    if (newTask !== '' && newDescriptionTask !== '') {
      const newId = tasks[tasks.length - 1].id + 1;
      dispatch(createOne({ id: newId, task: newTask, description_task: newDescriptionTask }));
      setNewTask('');
      setDescriptionTask('');
    }
  };

  const handleDelete = (id) => {
    dispatch(deleteTask(id));
  };

  return (
    <>
      <h1>Tasks</h1>
      <p>Add new Task</p>
      <input
        name="titleTask"
        placeholder="Add title task"
        value={newTask}
        onChange={handleChangeInput}
      />
      <input
        name="description_task"
        placeholder="Description task"
        value={newDescriptionTask}
        onChange={handleChangeInput}
      />
      <button type="button" onClick={saveTask}>Add task</button>
      <div>
        {tasks.map((task) => (
          <Task task={task} handleDelete={handleDelete} key={task.id} />
        ))}
      </div>
    </>
  );
};

Tasks.propTypes = {
  dispatch: PropTypes.func.isRequired,
  tasks: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired
    })
  ).isRequired
};

function mapStateToProps({ tasks }) {
  return { tasks };
}
export default connect(mapStateToProps)(Tasks);
