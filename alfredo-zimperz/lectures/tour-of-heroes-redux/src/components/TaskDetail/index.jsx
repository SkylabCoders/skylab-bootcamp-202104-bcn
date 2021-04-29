import React, { useState, useEffect } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';
import { getTaskById, updateTask } from '../../redux/actions/actionCreators';
import './taskDetail.css';

const TaskDetail = ({ selectedTask, dispatch }) => {
  const { taskId } = useParams();
  const [taskName, setTaskName] = useState(selectedTask?.name);
  const history = useHistory();

  useEffect(() => {
    dispatch(getTaskById(taskId));
  }, [taskId]);

  useEffect(() => {
    setTaskName(selectedTask.name);
  }, [selectedTask]);

  const handleNameChange = (event) => {
    setTaskName(event.target.value);
  };

  const save = () => {
    dispatch(updateTask({ id: selectedTask.id, name: taskName }));
  };

  return (
    selectedTask?.id ? (
      <section className="task">
        <h2>
          {taskName?.toUpperCase()}
          {' '}
          Details
        </h2>
        <div>
          <span>id: </span>
          {selectedTask?.id}
        </div>
        <div>
          <label htmlFor="task-name">
            Task name:
            <input
              id="task-name"
              placeholder="Task name"
              value={taskName}
              onChange={handleNameChange}
            />
          </label>

        </div>
        <button type="button" onClick={() => history.goBack()}>go back</button>
        <button type="button" onClick={save}>save</button>
      </section>
    ) : (
      <h2>
        There is no task with id
        {' '}
        {taskId}
      </h2>
    )

  );
};

TaskDetail.propTypes = {
  dispatch: PropTypes.func.isRequired,
  selectedTask: PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
  }).isRequired,
};

function mapStateToProps({ selectedTask }) {
  return { selectedTask };
}

export default connect(mapStateToProps)(TaskDetail);
