import React, { useRef } from 'react';
import { PropTypes } from 'prop-types';
import { connect } from 'react-redux';
import { addTask } from '../../redux/actions/actionCreator';
import './dashBoard.css';

function Dashboard({ dispatch }) {
  const textInput = useRef(null);

  function addNewTask() {
    const inputTask = textInput.current.value;
    dispatch(addTask({ task: inputTask, done: false }));
  }

  return (
    <header className="dash-board">
      <h1>TO DO LIST</h1>
      <span className="dash-board__element">
        <input className="dash-board__element--input" type="text" placeholder="Nueva tarea..." ref={textInput} />
        <button className="dash-board__element--button" type="button" onClick={() => addNewTask()}>AÑADIR</button>
      </span>
    </header>
  );
}
Dashboard.propTypes = {
  dispatch: PropTypes.func.isRequired
};

function mapStateToProps(store) {
  return {
    tasks: store.tasks
  };
}

export default connect(mapStateToProps)(Dashboard);
