/* eslint-disable no-underscore-dangle */
import React, { useEffect, useState } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';
import { updateTask, getTaskById } from '../../redux/actions/actionCreators';

const TaskDetail = ({ selectedTask, dispatch }) => {
  const { taskId } = useParams();
  const [taskTitle, setTaskTitle] = useState(selectedTask?.task);
  const history = useHistory();

  useEffect(() => {
    dispatch(getTaskById(taskId));
  }, []);

  // eslint-disable-next-line no-debugger
  debugger;
  useEffect(() => {
    setTaskTitle(selectedTask.task);
  }, [selectedTask.task]);

  const handleTitleChange = ({ target: { value } }) => {
    setTaskTitle(value);
  };

  const save = () => {
    dispatch(updateTask({ _id: selectedTask._id, task: taskTitle }));
  };

  return (
    selectedTask?._id ? (
      <>
        <article className="task-detail">
          <h2>
            {selectedTask.task}
            {' '}
            Details
          </h2>
          <div>
            <span>id: </span>
            {selectedTask?._id}
          </div>
          <div className="task-detail__modify">
            <label htmlFor="task-title">
              Title:
              <input
                id="task-detail__title"
                placeholder="Task title"
                value={taskTitle}
                onChange={handleTitleChange}
              />
            </label>
            <span className="slider round" />
          </div>
          <button type="button" onClick={save}>save</button>
        </article>
        <nav className="secondary-nav">
          <button type="button" onClick={() => history.goBack()}>go back</button>
        </nav>
      </>
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
    task: PropTypes.string,
    _id: PropTypes.number,
    done: PropTypes.bool
  }).isRequired
};

function mapStateToProps({ selectedTask }) {
  return { selectedTask };
}

export default connect(mapStateToProps)(TaskDetail);
