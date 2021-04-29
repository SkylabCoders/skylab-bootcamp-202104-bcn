import React, { useState, useEffect } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';
import { getTaskById, updateTask } from '../../redux/actions/actionCreators';
import './taskDetail.css';

const TaskDetail = ({ selectedTask, dispatch }) => {
  const { taskId } = useParams();
  const [taskTitle, setTaskTitle] = useState(selectedTask?.title);
  const history = useHistory();

  useEffect(() => {
    dispatch(getTaskById(taskId));
  }, [taskId]);

  useEffect(() => {
    setTaskTitle(selectedTask.title);
  }, [selectedTask]);

  const handleNameChange = (event) => {
    setTaskTitle(event.target.value);
  };

  const save = () => {
    dispatch(updateTask({ id: selectedTask.id, title: taskTitle }));
  };

  return (
    selectedTask?.id ? (
      <section className="task">
        <h2>
          {taskTitle?.toUpperCase()}
          {' '}
          Details
        </h2>
        <div>
          <span>id: </span>
          {selectedTask?.id}
        </div>
        <div>
          <label htmlFor="task-name">
            Title
            <input
              id="task-name"
              placeholder="Task name"
              value={taskTitle}
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
    title: PropTypes.string,
  }).isRequired,
};

function mapStateToProps({ selectedTask }) {
  return { selectedTask };
}

export default connect(mapStateToProps)(TaskDetail);
