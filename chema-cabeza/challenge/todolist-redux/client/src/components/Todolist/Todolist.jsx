/* eslint-disable react/prop-types */
/* eslint-disable jsx-a11y/control-has-associated-label */
import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import './Todolist.css';
import { PropTypes } from 'prop-types';
import {
  loadList, deleteTask, addtask, updateTask,
} from '../../redux/actions/actionCreators';

function Todolist({ list, dispatch }) {
  useEffect(() => {
    if (!list.length) dispatch(loadList());
  }, []);

  function delTask(taskId) {
    return dispatch(deleteTask(taskId));
  }

  function addTask() {
    const newTaskInput = document.querySelector('.newtask-input');
    return dispatch(addtask({ id: (list[list.length - 1].id + 1), title: newTaskInput.value }));
  }

  function handleUpdateTask(taskId, taskTitle) {
    return dispatch(updateTask(taskId, taskTitle));
  }

  return (
    <>
      <section className="newtask-section">
        <div className="newtask-container">
          <input type="text" className="newtask-input" />
          <button type="button" className="newtask-button" onClick={() => addTask()}>Add</button>
        </div>
        <div className="todo-container">
          <ul className="todo-list">
            {list.map((task) => (
              <>
                <div className="todo">
                  <li className="todo-item" key={task.id} contentEditable="true">{task.title}</li>
                  <button type="button" className="edit-btn" onClick={() => { handleUpdateTask(task.id, task.title); }}>Edit</button>
                  <button type="button" className="trash-btn" onClick={() => { delTask(task.id); }}>Delete</button>
                </div>

              </>
            )) }

          </ul>
        </div>
      </section>
    </>
  );
}

Todolist.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  list: PropTypes.array.isRequired,
  dispatch: PropTypes.func.isRequired,
};

function mapStateToProps(store) {
  return {
    list: store.list,
  };
}

export default connect(mapStateToProps)(Todolist);
