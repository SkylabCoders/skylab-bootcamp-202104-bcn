import { React, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getToken } from '../../../redux/actions/actionCreator';

function ListPreview({ token, dispatch }) {
  const [currentToken] = useState('');

  useEffect(() => {
    if (!token) dispatch(getToken());
  }, [currentToken]);
  return (
    <>
      <h1>This is the List</h1>

    </>
  );
}

ListPreview.propTypes = {
  token: PropTypes.string.isRequired,
  dispatch: PropTypes.func.isRequired
};

function mapStateToProps({ token }) {
  return {
    token
  };
}

export default connect(mapStateToProps)(ListPreview);
