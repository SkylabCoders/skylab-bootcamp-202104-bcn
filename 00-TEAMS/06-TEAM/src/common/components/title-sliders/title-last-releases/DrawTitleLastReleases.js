import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { loadTitleLastRelase } from '../../../../application/store/actions/actionsCreator';
import '../style.css';

function DrawTitleLastReleases({ titleLastRelases, dispatch }) {
  useEffect(() => {
    dispatch(loadTitleLastRelase());
  }, []);
  return (
    <span className="title-slider">{ titleLastRelases }</span>
  );
}

DrawTitleLastReleases.propTypes = {
  titleLastRelases: PropTypes.string.isRequired,
  dispatch: PropTypes.func.isRequired
};

const mapStateToProps = ({ titleLastRelases }) => ({
  titleLastRelases
});

export default connect(mapStateToProps)(DrawTitleLastReleases);
