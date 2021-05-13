/* eslint-disable no-underscore-dangle */
import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';
import { loadTasks, addTask, deleteTask } from '../../redux/actions/actionCreators';
import Task from '../Task';
import './tasks.css';

const Tasks = ({ tasks, dispatch }) => {
  const [newTaskTitle, setNewTaskTitle] = useState('');
  const [newTaskDescription, setNewTaskDescription] = useState('');

  useEffect(() => {
    if (!tasks.length) dispatch(loadTasks());
  }, []);

  const handleChangeInput = (event) => {
    switch (event.target.name) {
      case 'title':
        setNewTaskTitle(event.target.value);
        break;
      case 'description':
        setNewTaskDescription(event.target.value);
        break;
      default:
        break;
    }
  };
  const saveNewTask = () => {
    if (newTaskTitle !== '' && newTaskDescription !== '') {
      dispatch(addTask({ title: newTaskTitle, description: newTaskDescription }));
      setNewTaskTitle('');
      setNewTaskDescription('');
    }
  };
  const handleDelete = (id) => dispatch(deleteTask(id));

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
        />
        <input
          name="description"
          placeholder="description"
          value={newTaskDescription}
          onChange={handleChangeInput}
        />

        <button className="add-button" type="button" onClick={saveNewTask}>
          Add task
        </button>
      </section>
      <section className="tasks">
        {tasks.map((task) => (
          <Task task={task} handleDelete={handleDelete} key={task._id} />
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
