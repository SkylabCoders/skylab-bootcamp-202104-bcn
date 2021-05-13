import React, { useState } from 'react';
import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';
import { addTask } from '../../redux/actions/actionCreators';
import './cart.css';

function TaskAdder({ dispatch }) {
  const [currentTitle, setCurrentTitle] = useState('');
  const [currentDescription, setCurrentDescription] = useState('');

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

  // TODO: create total tasks Counter

  return (
    <>
      <h2 className="cart-tittle">Add a task</h2>
      <input
        type="text"
        onChange={handleTitleChange}
      />
      <input
        type="text"
        onChange={handleDescriptionChange}
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
  dispatch: PropTypes.func.isRequired
};

function mapStateToProps({ tasks }) {
  return {
    tasks
  };
}

export default connect(mapStateToProps)(TaskAdder);
