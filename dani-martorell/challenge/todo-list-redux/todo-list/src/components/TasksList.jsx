import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';
import { deleteTask, loadTasks } from '../redux/actions/actionCreator';

const TasksList = ({ tasks, dispatch }) => {
  useEffect(() => {
    if (!tasks.length) dispatch(loadTasks());
  }, []);

  const handleDelete = (id) => {
    dispatch(deleteTask(id));
  };

  return (
    <ul className="task-list">
      {
    tasks.map((task) => {
      const date = new Date().toLocaleDateString() === new Date(task.timeStamp).toLocaleDateString() ? 'Today' : new Date(task.timeStamp).toLocaleDateString('en-EN', { day: 'numeric', month: 'short', year: 'numeric' });

      return (
        <li key={task.id} className="task-item">
          {task.task}
          <span>{date}</span>
          <div className="task-item__buttons">
            <button type="button" onClick={() => { handleDelete(task.id); }}>DELETE</button>
            <button type="button">Done</button>
          </div>
        </li>
      );
    })
      }
    </ul>
  );
};

TasksList.propTypes = {
  tasks: PropTypes.shape([{}]).isRequired,
  dispatch: PropTypes.func.isRequired,
};

function mapStateToProps(tasks) {
  return {
    tasks,
  };
}
export default connect(mapStateToProps)(TasksList);
