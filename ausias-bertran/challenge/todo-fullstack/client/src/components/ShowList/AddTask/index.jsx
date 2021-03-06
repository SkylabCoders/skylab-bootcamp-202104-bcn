import React, { useRef } from 'react';
import { PropTypes } from 'prop-types';
import { connect } from 'react-redux';
import { addTask } from '../../../redux/actions/actionCreator';

const AddTask = ({ dispatch }, newId) => {
  const inputValue = useRef(null);
  function addNewTaskToTasksList() {
    const newTask = inputValue.current.value;
    dispatch(addTask({ task: newTask, id: newId }));
  }

  return (
    <div className="add-task">
      <input
        type="text"
        ref={inputValue}
        placeholder="Add new task"
      />
      <button type="button" onClick={addNewTaskToTasksList}>+</button>
    </div>
  );
};

AddTask.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

function mapStateToProps(store) {
  return {
    store: store.tasks,
    newId: store.length
      ? store[store.length - 1].id + 1
      : 1,
  };
}

export default connect(mapStateToProps)(AddTask);
