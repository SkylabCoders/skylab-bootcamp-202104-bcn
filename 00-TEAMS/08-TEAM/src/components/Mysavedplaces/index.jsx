/* eslint-disable no-console */
import React from 'react';
import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';
import SearchInput from '../SearchInput';
import './style.scss';

const MySavedPlaces = ({ favoriteCountry }) => {
  console.log(favoriteCountry);

  return (
    <>
      <div className="mySavedPlaces-cointainer">
        <h1>My Saved Places</h1>
        <SearchInput className="mySavedPlaces-cointainer__searchInput" />

        <div className="countriesSaved-cointainer">
          <ul>
            { favoriteCountry.map((element) => (
              <li>{element}</li>
            ))}
            {' '}

          </ul>
        </div>
      </div>
    </>
  );
};

MySavedPlaces.propTypes = {
  favoriteCountry: PropTypes.string.isRequired
};

function mapStateToProps(store) {
  return {
    favoriteCountry: store.favoriteCountry
  };
}

export default connect(mapStateToProps)(MySavedPlaces);
