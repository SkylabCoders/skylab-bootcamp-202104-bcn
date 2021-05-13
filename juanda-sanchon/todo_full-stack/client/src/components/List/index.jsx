import React, { useEffect } from 'react';
import { PropTypes } from 'prop-types';
import { connect } from 'react-redux';
import { loadTask } from '../../redux/actions/actionCreator';

function List({ tasks, dispatch }) {
  useEffect(() => {
    if (!tasks.length)dispatch(loadTask());
  }, [tasks.length]);

  return (

    <>
      <h3>MY LIST</h3>
      <ul>
        {tasks.map((task) => <li>{task.taskName}</li>)}
      </ul>
    </>
  );
}

List.propTypes = {
  dispatch: PropTypes.func.isRequired,
  tasks: PropTypes.shape([]).isRequired
};

function mapStateToProps(store) {
  return {
    tasks: store.tasks
  };
}

export default connect(mapStateToProps)(List);
