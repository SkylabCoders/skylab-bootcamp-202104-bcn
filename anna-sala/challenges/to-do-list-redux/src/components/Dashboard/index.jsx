import React from 'react';
// import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
// import { PropTypes } from 'prop-types';
import TASKS from '../../constants/tasks.mock';

function Dashboard() {
  return (
    <>
      <ul className="to-do-list">
        {TASKS.map((task) => (
          <li className="to-do-list__task">
            {' '}
            <Link to={`/${task.id}`} className="task-name">{task.taskName}</Link>
            <button type="button" className="delete">X</button>
          </li>
        ))}
      </ul>
    </>
  );
}
// Dashboard.propTypes = {
//   tasks: PropTypes.shape([]).isRequired,
//   // dispatch: PropTypes.func.isRequired,
// };

// function mapStateToProps(store) {
//   return {
//     tasks: store.tasks,
//   };
// }
// connect(mapStateToProps)
export default (Dashboard);
