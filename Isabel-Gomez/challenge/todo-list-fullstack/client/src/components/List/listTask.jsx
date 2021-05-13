import React from 'react';
import PropTypes from 'prop-types';

const ListTask = ({ taskTitle }) => (
  <div>{taskTitle}</div>
);

ListTask.propTypes = {
  taskTitle: PropTypes.string.isRequired,
};

export default ListTask;
