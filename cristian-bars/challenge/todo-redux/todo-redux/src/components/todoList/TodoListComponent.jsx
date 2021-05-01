import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';
import { loadTasks } from '../../redux/actions/actionCreator';

function TodoListComponent({ tasks, dispatch }) {
  useEffect(() => {
    if (!tasks.length) dispatch(loadTasks());
  }, []);
  return (
    <div className="container">Hola mundo</div>
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
