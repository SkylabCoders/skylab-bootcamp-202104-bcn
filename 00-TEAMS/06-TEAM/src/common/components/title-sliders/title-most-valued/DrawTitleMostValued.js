import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { loadTitleMostValued } from '../../../../application/store/actions/actionsCreator';
import '../style.css';

function DrawTitleMostValued({ titleMostValued, dispatch }) {
  useEffect(() => {
    dispatch(loadTitleMostValued());
  }, []);
  return (
    <span className="title-slider">{ titleMostValued }</span>
  );
}

DrawTitleMostValued.propTypes = {
  titleMostValued: PropTypes.string.isRequired,
  dispatch: PropTypes.func.isRequired
};

const mapStateToProps = ({ titleMostValued }) => ({
  titleMostValued
});

export default connect(mapStateToProps)(DrawTitleMostValued);
