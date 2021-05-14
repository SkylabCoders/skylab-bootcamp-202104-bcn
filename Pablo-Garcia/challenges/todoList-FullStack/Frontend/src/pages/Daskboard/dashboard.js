/* eslint-disable no-underscore-dangle */
import React, { useEffect } from 'react';
import { PropTypes } from 'prop-types';
import { connect } from 'react-redux';
import { getTask } from '../../common/actions/actionCreators';
import Task from '../taskItem/task';
import { PanelTask, CounterTask, ListTasks } from './style';

const Dashboard = ({ tasks, dispatch }) => {
  useEffect(() => {
    dispatch(getTask());
  }, []);

  const pendingTask = tasks.filter((task) => !task.done);
  return (
    <PanelTask>
      <CounterTask>
        Total Task:
        {tasks.length}
      </CounterTask>
      {' '}
      <ListTasks>
        <ul>
          { pendingTask.map((task) => (
            <li>
              <Task task={task} key={task.id} />
            </li>
          )) }
        </ul>
      </ListTasks>
    </PanelTask>
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
