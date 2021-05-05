import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { loadTitleMostVewed } from '../../../../application/store/actions/actionsCreator';
import '../style.css';

function DrawTitleMostViewed({ title, dispatch }) {
  useEffect(() => {
    dispatch(loadTitleMostVewed());
  }, []);
  return (
    <span className="title-slider">{ title }</span>
  );
}

DrawTitleMostViewed.propTypes = {
  title: PropTypes.string.isRequired,
  dispatch: PropTypes.func.isRequired
};

const mapStateToProps = ({ title }) => ({
  title
});

export default connect(mapStateToProps)(DrawTitleMostViewed);
