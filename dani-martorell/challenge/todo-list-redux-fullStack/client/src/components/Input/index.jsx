import { React, useState } from 'react';
import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';
import { addTask } from '../../redux/actions/actionCreators';

import './input.css';

function Input({ dispatch }) {
  const [taskName, setTaskName] = useState('');
  function handleInputChange(e) {
    setTaskName(e.target.value);
  }
  function handleClick() {
    const newTask = { name: taskName };
    dispatch(addTask(newTask));
    setTaskName('');
  }

  return (
    <form className="form-block">
      <input className="form-block__input" value={taskName} autoComplete="off" placeholder="Write your task here..." onChange={(e) => handleInputChange(e)} type="text" id="fname" size="50" />
      <button type="button" className="form-block__btn" onClick={handleClick}>Add Task</button>
    </form>
  );
}

Input.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

function mapStateToProps({ tasks }) {
  return {
    tasks,
  };
}
export default connect(mapStateToProps)(Input);
