import React from 'react';
import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';
import { addTask } from '../../redux/actions/actionCreator';
import './InputComponent.css';

const InputComponent = ({ tasks, dispatch }) => {
  const newTask = {
    task: null,
    id: null,
    timeStamp: null,
  };

  const handleChange = (e) => {
    const inputField = e.target.value;
    newTask.task = inputField;
  };

  const idGenerator = (list) => {
    const idList = list.map((task) => task.id);
    const maxId = idList.sort((a, b) => b - a)[0];
    return maxId + 1;
  };

  const handleAddTask = () => {
    newTask.id = idGenerator(tasks);
    newTask.timeStamp = Date.now();
    const inputField = document.getElementById('input-task');
    inputField.value = '';
    dispatch(addTask(newTask));
  };

  return (
    <label htmlFor="input-task">
      <input type="text" id="input-task" placeholder="Write your task" onChange={(e) => handleChange(e)} />
      <button type="button" onClick={handleAddTask}>Add</button>
    </label>
  );
};

InputComponent.propTypes = {
  tasks: PropTypes.shape([{}]).isRequired,
  dispatch: PropTypes.func.isRequired,
};

function mapStateToProps(tasks) {
  return {
    tasks,
  };
}
export default connect(mapStateToProps)(InputComponent);
