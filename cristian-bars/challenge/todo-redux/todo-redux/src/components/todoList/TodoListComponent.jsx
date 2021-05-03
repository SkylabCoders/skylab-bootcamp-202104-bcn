import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';
import { loadTasks } from '../../redux/actions/actionCreator';

function TodoListComponent({ tasks, dispatch }) {
  useEffect(() => {
    // eslint-disable-next-line no-debugger
    debugger;
    dispatch(loadTasks());
  }, []);
  return (
    <div>
      <ul className="container__list">
        {
          tasks?.length && (
            tasks.map((element) => (
              <>
                <li className="container__item">{element.task}</li>
                <button type="button" className="container__delTaskButton">Delete</button>
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
