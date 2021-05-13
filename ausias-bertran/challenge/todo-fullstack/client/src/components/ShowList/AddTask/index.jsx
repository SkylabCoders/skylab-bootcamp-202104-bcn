import React, { useRef } from 'react';
import { PropTypes } from 'prop-types';
import { connect } from 'react-redux';
import { addTask } from '../../../redux/actions/actionCreator';

const AddTask = ({ dispatch }) => {
  const inputValue = useRef(null);
  function addTaskToTasksList() {
    const newTask = inputValue.current.value;
    dispatch(addTask({ task: newTask, id: 8 }));
  }

  return (
    <div className="add-task">
      <input
        type="text"
        ref={inputValue}
        placeholder="Add new task"
      />
      <button type="button" onClick={addTaskToTasksList}>+</button>
    </div>
  );
};

AddTask.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

function mapStateToProps(store) {
  return {
    store: store.tasks,
  };
}

export default connect(mapStateToProps)(AddTask);
