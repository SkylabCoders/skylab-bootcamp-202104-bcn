import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { deleteError } from '../../redux/actions/actionCreators';

const ErrorMessage = ({ message, dispatch }) => {
  const handleClick = () => {
    dispatch(deleteError());
  };

  return (
    <div>
      <div className="error__text">
        <h3>Something went wrong</h3>
        <p>{message ? `${JSON.stringify(message)}` : 'nada'}</p>
      </div>
      <div className="error__action">
        <button type="button" onClick={handleClick}>X</button>
      </div>
    </div>
  );
};

ErrorMessage.propTypes = {
  message: PropTypes.string.isRequired,
  dispatch: PropTypes.func.isRequired
};

export default connect(null)(ErrorMessage);
