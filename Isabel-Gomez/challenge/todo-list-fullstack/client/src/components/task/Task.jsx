/* eslint-disable no-debugger */
import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { loadTasks } from '../../redux/actions/actionCreators';
import './task.css';

const Task = ({ dispatch, tasks }) => {
  debugger;
  useEffect(() => {
    if (!tasks?.length) dispatch(loadTasks());
  }, []);
  return (
    <>
      <section>
        <label htmlFor="task-name" className="label-create">
          <input id="task-name" placeholder="Add your task here..." className="label-create__input" />
          <button type="button" className="label-create__button">Add task</button>
        </label>
      </section>
      <section className="taskList">
        <ul>
          {tasks?.map((element) => <li>{element.name}</li>)}
        </ul>
      </section>
    </>
  );
};

Task.propTypes = {
  dispatch: PropTypes.func.isRequired,
  tasks: PropTypes.shape([]).isRequired,
};

const mapStateToProps = (store) => ({
  tasks: store.tasks,
});

export default connect(mapStateToProps)(Task);
