import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';
import { addTask } from '../../redux/actions/actionCreators';
import './taskAdder.css';

function TaskAdder({ dispatch, tasks }) {
  const [currentTitle, setCurrentTitle] = useState('');
  const [currentDescription, setCurrentDescription] = useState('');
  const [currentTotal, setCurrentTotal] = useState(0);

  useEffect(() => {
    setCurrentTotal(tasks.length);
  }, [tasks.length]);

  const handleAddTask = () => {
    dispatch(addTask({
      title: currentTitle,
      description: currentDescription,
      done: false
    }));
    setCurrentTitle('');
    setCurrentDescription('');
  };

  const handleTitleChange = (event) => {
    setCurrentTitle(event.target.value);
  };

  const handleDescriptionChange = (event) => {
    setCurrentDescription(event.target.value);
  };

  return (
    <div className="tasks-adder">
      <h1 className="subtitle">To do list</h1>
      <h3 className="total-tasks">
        Your total tasks:
        {' '}
        {currentTotal}
      </h3>
      <span className="inputs">
        <input
          type="text"
          onChange={handleTitleChange}
          placeholder="Title"
          className="taskTitle-input"
          value={currentTitle}
        />
        <input
          type="text-box"
          onChange={handleDescriptionChange}
          placeholder="Description"
          className="taskDescription-input"
          value={currentDescription}
        />
      </span>

      <button
        type="button"
        onClick={handleAddTask}
        className="addTask-button"
      >
        Add task
      </button>
    </div>
  );
}

TaskAdder.propTypes = {
  dispatch: PropTypes.func.isRequired,
  tasks: PropTypes.shape({
    length: PropTypes.number.isRequired
  }).isRequired
};

function mapStateToProps({ tasks }) {
  return {
    tasks
  };
}

export default connect(mapStateToProps)(TaskAdder);
