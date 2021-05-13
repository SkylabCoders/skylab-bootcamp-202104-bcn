/* eslint-disable no-underscore-dangle */
import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';
import {
  loadTasks, deleteTask
} from '../../redux/actions/actionCreators';
import './list.css';

function TasksList({ tasks, dispatch }) {
  useEffect(() => {
    if (!tasks.length) dispatch(loadTasks());
  }, []);

  const handleDelete = (taskId) => {
    dispatch(deleteTask(taskId));
  };

  // TODO: As a delete exists add a modify to every task

  return (
    <>
      <h1 className="list-tittle">My tasks</h1>
      <ul className="products-list">
        {
          tasks?.map((task) => (
            <li className="products-list__product">
              <span className="product-name">
                {task.title}
              </span>
              <span className="product-cost">
                {task.description}
              </span>
              <button type="button" className="button-add" onClick={() => handleDelete(task._id)}>-</button>
            </li>
          ))
        }
      </ul>
    </>
  );
}

TasksList.propTypes = {
  tasks: PropTypes.shape([]).isRequired,
  dispatch: PropTypes.func.isRequired
};

function mapStateToProps({ tasks }) {
  return {
    tasks
  };
}

export default connect(mapStateToProps)(TasksList);
