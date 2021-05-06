/* eslint-disable no-debugger */
import React from 'react';
import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';
import { useParams } from 'react-router-dom';
import './style.scss';

import { addCountryToFav } from '../../redux/actions/actionCreators';

function FavoriteButton({ dispatch }) {
  const { country } = useParams();
  function handleAddCountry() {
    dispatch(addCountryToFav(country));
  }

  return (
    <>
      <button
        type="button"
        onClick={() => handleAddCountry()}
      >
        ✪
      </button>
    </>
  );
}

FavoriteButton.propTypes = {
  dispatch: PropTypes.func.isRequired
//   country: PropTypes.string.isRequired
};

function mapStateToProps(store) {
  return {
    favoriteCounty: store.favoriteCountry
  };
}

export default connect(mapStateToProps)(FavoriteButton);
