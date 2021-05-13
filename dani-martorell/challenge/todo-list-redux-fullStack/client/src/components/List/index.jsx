/* eslint-disable no-underscore-dangle */
import { React, useEffect } from 'react';
import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';
import { loadTasks } from '../../redux/actions/actionCreators';

import './list.css';

function List({ tasks, dispatch }) {
  useEffect(() => {
    if (!tasks.length) dispatch(loadTasks());
  }, []);
  return (
    <ul className="task-list">
      {
        tasks.map((task) => (
          <li key={task.id} className="task-item">
            <p className="task-item__name">{task.name}</p>
            <button type="button" className="task-item__btn delete-btn" id={task._id}>Delete</button>
            <button type="button" className="task-item__btn done-btn" id={task._id}>Done</button>
          </li>
        ))
      }
    </ul>
  );
}

List.propTypes = {
  tasks: PropTypes.shape([{}]).isRequired,
  dispatch: PropTypes.func.isRequired,
};

function mapStateToProps({ tasks }) {
  return {
    tasks,
  };
}

export default connect(mapStateToProps)(List);
