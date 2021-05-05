import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { loadTitle } from '../../../../redux/actions/actionsCreator';

function DrawTitle({ title, dispatch }) {
  // eslint-disable-next-line no-debugger
  debugger;
  useEffect(() => {
    dispatch(loadTitle());
  }, []);
  return (
    <span>{ title }</span>
  );
}

DrawTitle.propTypes = {
  title: PropTypes.string.isRequired,
  dispatch: PropTypes.func.isRequired
};

const mapStateToProps = ({ title }) => ({
  title
});

export default connect(mapStateToProps)(DrawTitle);
