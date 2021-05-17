/* eslint-disable no-underscore-dangle */
import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';
import { loadTasks, addTask } from '../../redux/actions/actionCreators';
import Task from '../Task';
import './tasks.css';

const Tasks = ({ tasks, dispatch }) => {
  const [newTaskTitle, setNewTaskTitle] = useState('');
  const [newTaskDescription, setNewTaskDescription] = useState('');

  useEffect(() => {
    if (!tasks.length) dispatch(loadTasks());
  }, []);

  const handleChangeInput = (event) => {
    if (event.target.name === 'title') setNewTaskTitle(event.target.value);
    if (event.target.name === 'description') setNewTaskDescription(event.target.value);
  };
  const saveNewTask = () => {
    if (newTaskTitle !== '' && newTaskDescription !== '') {
      dispatch(addTask({ title: newTaskTitle, description: newTaskDescription }));
      setNewTaskTitle('');
      setNewTaskDescription('');
    }
  };

  return (
    <>
      <h2 className="hidden">My Tasks</h2>
      <section className="new-task">
        <h3>Add new task</h3>
        <input
          name="title"
          placeholder="title"
          value={newTaskTitle}
          onChange={handleChangeInput}
          data-testid="add-task_title_input"
          autoComplete="off"
        />
        <input
          name="description"
          placeholder="description"
          value={newTaskDescription}
          onChange={handleChangeInput}
          data-testid="add-task_description_input"
          autoComplete="off"
        />

        <button
          className="add-button"
          type="button"
          onClick={saveNewTask}
          data-testid="add-task_button"
        >
          Add task
        </button>
      </section>
      <section className="tasks">
        {tasks.map((task) => (
          <Task task={task} key={task._id} />
        ))}
      </section>
    </>
  );
};

Tasks.propTypes = {
  dispatch: PropTypes.func.isRequired,
  tasks: PropTypes.arrayOf(
    PropTypes.shape({
      _id: PropTypes.string.isRequired,
    }),
  ).isRequired,
};

function mapStateToProps({ tasks }) {
  return { tasks };
}

export default connect(mapStateToProps)(Tasks);
