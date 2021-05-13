import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';
import AddTask from './AddTask';
import { loadTasks } from '../../redux/actions/actionCreator';

const ShowList = ({ dispatch, tasks }) => {
  useEffect(() => {
    if (!tasks.length)dispatch(loadTasks());
  }, [tasks.length]);

  return (
    <div className="tasks-list">
      <h2>To Do List</h2>
      <ul>
        {tasks.map((task) => (
          <li className="task">
            {task.id}
            {' '}
            {task.task}
            <button className="task__delete-button" type="button" onClick={() => console.log(`delete task ${task.id}`)}>-</button>
            <button className="task__delete-button" type="button" onClick={() => console.log(`upgrade task ${task.id}`)}>PUT</button>
          </li>
        ))}
      </ul>
      <AddTask />
    </div>
  );
};

ShowList.propTypes = {
  dispatch: PropTypes.func.isRequired,
  tasks: PropTypes.shape([]).isRequired,
};

function mapStateToProps(store) {
  return {
    tasks: store.tasks,
  };
}

export default connect(mapStateToProps)(ShowList);
