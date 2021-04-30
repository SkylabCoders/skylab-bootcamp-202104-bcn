import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { deleteTask, loadTasks, createTask } from '../../redux/actions/actionCreators';

function TasksList({ tasks, dispatch }) {
  const [taskValue, setTaskValue] = useState();

  useEffect(() => {
    if (!tasks.length) dispatch(loadTasks());
  }, []);

  const handleDelete = (id) => {
    dispatch(deleteTask(id));
  };

  function getTaskValue(event) {
    setTaskValue(event.target.value);
  }

  function handleCreate() {
    tasks.sort((firstHero, secondHero) => {
      if (firstHero.id > secondHero.id) {
        return 1;
      }
      if (firstHero.id < secondHero.id) {
        return -1;
      }
      return 0;
    });

    const newId = tasks[tasks.length - 1].id + 1;
    dispatch(createTask({ id: newId, value: taskValue, status: 1 }));
  }

  return (
    <>
      <h2>All tasks</h2>
      <input type="text" onChange={getTaskValue} />
      {' '}
      <button type="button" onClick={() => handleCreate()}>Create</button>
      <ul>
        {
        tasks && tasks.map((task) => (
          <li key={`${task.taskId}`}>
            {' '}
            {task.value}
            {' '}
            <button type="button" onClick={() => handleDelete(task.taskId)}>Delete</button>
          </li>
        ))
    }
      </ul>
    </>
  );
}

TasksList.propTypes = {
  tasks: PropTypes.shape([{}]).isRequired,
  dispatch: PropTypes.func.isRequired,
};

function mapStateToProps(store) {
  return {
    tasks: store.tasks,
  };
}
export default connect(mapStateToProps)(TasksList);
