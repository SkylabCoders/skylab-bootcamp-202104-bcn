/* eslint-disable jsx-a11y/control-has-associated-label */
import React from 'react';
// import { connect } from 'react-redux';
import './Todolist.css';
// import { PropTypes } from 'prop-types';

function Todolist() {
  return (
    <>
      <section className="newtask-section">
        <div className="newtask-container">
          <input type="text" className="newtask-input" />
          <button type="button" className="newtask-button" />
        </div>
        <div className="todo-container">
          <ul className="todo-list" />
        </div>
      </section>
    </>
  );
}

export default Todolist;
