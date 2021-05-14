/* eslint-disable no-underscore-dangle */
import React, { useEffect } from 'react';
import { PropTypes } from 'prop-types';
import { connect } from 'react-redux';
import { getTask } from '../../common/actions/actionCreators';
import Task from '../taskItem/task';

const Dashboard = ({ tasks, dispatch }) => {
  // eslint-disable-next-line no-debugger
  debugger;

  useEffect(() => {
    dispatch(getTask());
  }, []);

  const pendingTask = tasks.filter((task) => !task.done);
  return (
    <>
      <div>
        Total Task:
        {' '}
        { pendingTask.map((task) => (
          <p>
            <Task task={task} key={task.id} />
          </p>
        )) }
      </div>
    </>
  );
};

Dashboard.propTypes = {
  tasks: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string
    })
  ).isRequired,
  dispatch: PropTypes.func.isRequired
};

function mapStateToProps({ tasks }) {
  return {
    tasks
  };
}
export default connect(mapStateToProps)(Dashboard);
