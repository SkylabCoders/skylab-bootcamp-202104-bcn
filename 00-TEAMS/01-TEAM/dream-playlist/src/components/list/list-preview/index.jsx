import { React, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getToken, getUserData } from '../../../redux/actions/actionCreator';

function ListPreview({ token, user, dispatch }) {
  const [currentToken, setCurrentToken] = useState(token);

  useEffect(() => {
    if (!token) dispatch(getToken());
  }, [currentToken]);

  if (currentToken === false && token) setCurrentToken(token);

  useEffect(() => {
    if (token) dispatch(getUserData(currentToken));
  }, [currentToken]);
  return (
    <>
      <h1>
        This is the List of
        {' '}
        {user.id}
      </h1>

    </>
  );
}

ListPreview.propTypes = {
  token: PropTypes.string.isRequired,
  user: PropTypes.shape({
    id: PropTypes.string
  }).isRequired,
  dispatch: PropTypes.func.isRequired
};

function mapStateToProps({ token, user }) {
  return {
    token,
    user
  };
}

export default connect(mapStateToProps)(ListPreview);
