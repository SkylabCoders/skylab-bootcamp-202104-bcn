import React, { useState, useEffect } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';
import { getTaskById, updateTask } from '../../redux/actions/actionCreators';
import './taskDetail.css';

const TaskDetail = ({ selectedTask, dispatch }) => {
  const { taskId } = useParams();
  const [taskTitle, setTaskTitle] = useState(selectedTask?.title);
  const [taskDescription, setTaskDescription] = useState(selectedTask?.description);
  const [taskDone, setTaskDone] = useState(selectedTask?.done);
  const history = useHistory();

  useEffect(() => {
    dispatch(getTaskById(taskId));
  }, [taskId]);

  useEffect(() => {
    setTaskTitle(selectedTask.title);
  }, [selectedTask]);

  const handleTitleChange = ({ target: { value } }) => {
    setTaskTitle(value);
  };

  const handleDescriptionChange = ({ target: { value } }) => {
    setTaskDescription(value);
  };

  const handleDoneChange = () => {
    setTaskDone(!taskDone);
  };

  const save = () => {
    dispatch(updateTask({ id: selectedTask.id, title: taskTitle, done: taskDone }));
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
          <label htmlFor="task-title">
            Title
            <input
              id="task-title"
              placeholder="Task title"
              value={taskTitle}
              onChange={handleTitleChange}
            />
          </label>
          <label htmlFor="task-description">
            Description
            <input
              id="task-description"
              placeholder="Task Description"
              value={taskDescription}
              onChange={handleDescriptionChange}
            />
          </label>
          <label className="switch" htmlFor="Task done">
            Done
            <input
              type="button"
              placeholder="Task Done"
              value={taskDone ? 'Mark as pending' : 'Mark as done'}
              onClick={handleDoneChange}
            />
            <span className="slider round" />
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
    description: PropTypes.string,
    done: PropTypes.bool,
  }).isRequired,
};

function mapStateToProps({ selectedTask }) {
  return { selectedTask };
}

export default connect(mapStateToProps)(TaskDetail);
