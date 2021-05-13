import React from 'react';
import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';

import './list.css';

function List({ tasks, dispatch }) {
  return (
    <h3>List component</h3>
  );
}

List.propTypes = {
  tasks: PropTypes.shape([{}]).isRequired,
  dispatch: PropTypes.func.isRequired,
};

function mapStateToProps({ tasks }) {
  return {
    tasks,
  };
}

export default connect(mapStateToProps)(List);
