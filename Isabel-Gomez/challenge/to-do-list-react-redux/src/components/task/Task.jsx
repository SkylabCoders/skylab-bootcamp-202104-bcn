import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { addTask } from '../../redux/actions/actionCreators';
import './task.css';
import ListTask from '../List/listTask';

const Task = ({ dispatch }) => {
  const [taskTitle, setTaskTitle] = useState('');
  const [taskId] = useState(0);

  const handleNameChange = (event) => {
    setTaskTitle(event.target.value);
  };

  const createNewTask = () => {
    dispatch(addTask({ id: taskId, title: taskTitle }));
  };
  return (
    <section>
      <label htmlFor="task-name" className="label-create">
        <input id="task-name" value={taskTitle} onChange={handleNameChange} placeholder="Add your task here..." className="label-create__input" />
        <button onClick={createNewTask} type="button" className="label-create__button">Add task</button>
      </label>
      <div>
        <ListTask />
      </div>
    </section>
  );
};

Task.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = (store) => ({
  stateTask: store.taskReducer,
});

export default connect(mapStateToProps)(Task);
