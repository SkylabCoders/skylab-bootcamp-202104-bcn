import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';
import { loadTasks, deleteTask } from '../redux/actions/actionCreators';

const TaskList = ({ tasks, dispatch }) => {
  useEffect(() => {
    if (!tasks.length) dispatch(loadTasks());
  }, []);

  function handleDelete(taskId) {
    dispatch(deleteTask(taskId));
  }

  return (
    <div>
      <ul>
        {tasks.map((task) => (
          <li>
            {task.task}
            <button type="button" onClick={() => handleDelete(task.id)}>DELETE</button>
            <button type="button">DONE</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

TaskList.propTypes = {
  tasks: PropTypes.shape([]).isRequired,
  dispatch: PropTypes.func.isRequired
};

function mapStateToProps(tasks) {
  return { tasks };
}

export default connect(mapStateToProps)(TaskList);
