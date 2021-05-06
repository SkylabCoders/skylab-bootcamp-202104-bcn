import React from 'react';
import SearchInput from '../SearchInput';
import './style.scss';

const MySavedPlaces = () => (
  <>
    <div className="mySavedPlaces-cointainer">
      <h1>My Saved Places</h1>
      <SearchInput className="mySavedPlaces-cointainer__searchInput" />
    </div>
  </>
);

export default MySavedPlaces;
