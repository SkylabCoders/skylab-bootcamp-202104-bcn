import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { PropTypes } from 'prop-types';
import './tasks.css';
import { loadTasks, addTask, deleteTask } from '../../redux/actions/actionCreators';

const Tasks = ({ tasks, dispatch }) => {
  const [newTaskName, setNewTaskName] = useState();

  useEffect(() => {
    if (!tasks.length) dispatch(loadTasks());
  }, []);

  const handleChangeInput = (event) => setNewTaskName(event.target.value);
  const saveNewTask = () => {
    if (newTaskName) {
      dispatch(addTask(newTaskName));
    }
  };
  const handleDelete = (id) => dispatch(deleteTask(id));

  return (
    <>
      <h2>My Tasks</h2>

      <div>
        <label htmlFor="new-task" id="new-task">
          Task name:
          <input
            htmlFor="new-task"
            value={newTaskName}
            onChange={handleChangeInput}
          />
        </label>
        <button className="add-button" type="button" onClick={saveNewTask}>
          Add task
        </button>
      </div>

      <ul className="tasks">
        {tasks.map((task, index) => (
          <li key={task.id}>
            <Link to={`/tasks/${task.id}`}>
              <span className="badge">{index + 1}</span>
              {' '}
              {task.name}
            </Link>
            <button
              className="delete"
              title="delete task"
              type="button"
              onClick={() => handleDelete(task.id)}
            >
              x
            </button>
          </li>
        ))}

      </ul>
    </>
  );
};

Tasks.propTypes = {
  dispatch: PropTypes.func.isRequired,
  tasks: PropTypes.shape([]).isRequired,
};

function mapStateToProps({ tasks }) {
  return { tasks };
}

export default connect(mapStateToProps)(Tasks);
