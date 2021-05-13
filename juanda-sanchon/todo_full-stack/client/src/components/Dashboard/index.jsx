import React, { useRef } from 'react';
import { PropTypes } from 'prop-types';
import { connect } from 'react-redux';
import { addTask } from '../../redux/actions/actionCreator';

function Dashboard({ dispatch }) {
  const textInput = useRef(null);

  function addNewTask() {
    const inputTask = textInput.current.value;
    dispatch(addTask({ taskName: inputTask }));
  }

  return (
    <>
      <h1>TO DO LIST</h1>
      <input type="text" placeholder="Nueva tarea..." ref={textInput} />
      <button type="button" onClick={() => addNewTask()}>AÑADIR</button>
    </>
  );
}
Dashboard.propTypes = {
  dispatch: PropTypes.func.isRequired
};

function mapStateToProps(store) {
  return {
    store: store.tasks
  };
}

export default connect(mapStateToProps)(Dashboard);
