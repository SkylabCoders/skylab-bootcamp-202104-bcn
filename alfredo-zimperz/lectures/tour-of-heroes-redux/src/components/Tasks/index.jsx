import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { PropTypes } from 'prop-types';
import './tasks.css';
import { loadTasks, addTask, deleteTask } from '../../redux/actions/actionCreators';

const Tasks = ({ tasks, dispatch }) => {
  const [newTaskTitle, setNewTaskTitle] = useState();
  const [newTaskDescription, setNewTaskDescription] = useState();

  useEffect(() => {
    if (!tasks.length) dispatch(loadTasks());
  }, []);

  const handleChangeInput = (event) => {
    switch (event.target.name) {
      case 'title':
        setNewTaskTitle(event.target.value);
        break;
      case 'description':
        setNewTaskDescription(event.target.value);
        break;
      default:
        break;
    }
  };
  const saveNewTask = () => {
    if (newTaskTitle && newTaskDescription) {
      dispatch(addTask({ title: newTaskTitle, description: newTaskDescription }));
    }
  };
  const handleDelete = (id) => dispatch(deleteTask(id));

  return (
    <>
      <h2>My Tasks</h2>
      <div>
        <h3>New task:</h3>
        <label htmlFor="new-task-title" id="new-task-title">
          Title:
          <input
            name="title"
            value={newTaskTitle}
            onChange={handleChangeInput}
          />
        </label>
        <label htmlFor="new-task-description" id="new-task-description">
          Description:
          <input
            name="description"
            value={newTaskDescription}
            onChange={handleChangeInput}
          />
        </label>
        <button className="add-button" type="button" onClick={saveNewTask}>
          Add task
        </button>
      </div>

      <div className="tasks">
        {tasks.map((task) => (
          <div key={task.id} className="task">

            <div className="task__text">
              <Link to={`/tasks/${task.id}`}>
                <h1>{task.title}</h1>
                <p>{task.description}</p>
              </Link>
            </div>
            <div className="task__actions">
              <button
                className="delete"
                title="delete task"
                type="button"
                onClick={() => handleDelete(task.id)}
              >
                x
              </button>
            </div>
          </div>
        ))}

      </div>
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
