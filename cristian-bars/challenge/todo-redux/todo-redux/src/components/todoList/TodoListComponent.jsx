import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';
import { addTask, deleteTask, loadTasks } from '../../redux/actions/actionCreator';

function TodoListComponent({ tasks, dispatch }) {
  useEffect(() => {
    dispatch(loadTasks());
  }, []);

  function clearTask(task) {
    dispatch(deleteTask(task));
  }

  function newTask() {
    const value = document.getElementById('newTask');
    const task = { task: value.value, completed: false };
    dispatch(addTask(task));
  }
  return (
    <div>
      <div>
        <inputlabel>Add task</inputlabel>
        <input type="text" placeholder="Task description" id="newTask" />
        <button type="button" onClick={() => newTask()}>Add task</button>
      </div>
      <ul className="container__list">
        {
          tasks?.length && (
            tasks.map((element) => (
              <>
                <li className="container__item" key={element.id}>{element.task}</li>
                <button type="button" className="container__delTaskButton" onClick={() => clearTask(element)}>Delete</button>
              </>
            ))
          )
        }
      </ul>
    </div>
  );
}

TodoListComponent.propTypes = {
  tasks: PropTypes.shape([]).isRequired,
  dispatch: PropTypes.func.isRequired
};

function mapStateToProps(store) {
  return {
    tasks: store.tasks
  };
}

export default connect(mapStateToProps)(TodoListComponent);
