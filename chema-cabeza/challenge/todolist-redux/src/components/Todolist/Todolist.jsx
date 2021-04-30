/* eslint-disable react/forbid-prop-types */
/* eslint-disable react/prop-types */
/* eslint-disable jsx-a11y/control-has-associated-label */
import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import './Todolist.css';
import { PropTypes } from 'prop-types';
import { loadList } from '../../redux/actions/actionCreators';

function Todolist({ list, dispatch }) {
  useEffect(() => {
    if (!list.length) dispatch(loadList());
  }, []);

  return (
    <>
      <section className="newtask-section">
        <div className="newtask-container">
          <input type="text" className="newtask-input" />
          <button type="button" className="newtask-button"> Add</button>
        </div>
        <div className="todo-container">
          <ul className="todo-list">
            {list.map((task) => <li className="todo-item" key={task.id}>{task.title}</li>)}

          </ul>
        </div>
      </section>
    </>
  );
}

Todolist.propTypes = {
  list: PropTypes.array.isRequired,
  dispatch: PropTypes.func.isRequired,
};

function mapStateToProps(store) {
  return {
    list: store.list,
  };
}

export default connect(mapStateToProps)(Todolist);
