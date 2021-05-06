import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { loadTitleMostVewed } from '../../../../application/store/actions/actionsCreator';
import '../style.css';

function DrawTitleMostViewed({ titleMostViewed, dispatch }) {
  useEffect(() => {
    dispatch(loadTitleMostVewed());
  }, []);
  return (
    <span className="title-slider">{ titleMostViewed }</span>
  );
}

DrawTitleMostViewed.propTypes = {
  titleMostViewed: PropTypes.string.isRequired,
  dispatch: PropTypes.func.isRequired
};

const mapStateToProps = ({ titleMostViewed }) => ({
  titleMostViewed
});

export default connect(mapStateToProps)(DrawTitleMostViewed);
