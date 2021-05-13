import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';
import { addTask } from '../../redux/actions/actionCreators';
import './cart.css';

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
  };

  const handleTitleChange = (event) => {
    setCurrentTitle(event.target.value);
  };

  const handleDescriptionChange = (event) => {
    setCurrentDescription(event.target.value);
  };

  return (
    <>
      <h2 className="cart-tittle">Add a task</h2>
      <h3>
        Your total tasks:
        {' '}
        {currentTotal}
      </h3>
      <input
        type="text"
        onChange={handleTitleChange}
        placeholder="Title"
      />
      <input
        type="text"
        onChange={handleDescriptionChange}
        placeholder="Description"
      />
      <button
        type="button"
        onClick={handleAddTask}
      >
        Add task
      </button>
    </>
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
