import React from 'react';
import './heroSearch.css';
import { PropTypes } from 'prop-types';

const HeroSearch = ({ onChange }) => (
  <div className="search-component">
    <h2>Hero Search</h2>
    <input
      id="search-box"
      onChange={onChange}
    />
  </div>
);

HeroSearch.propTypes = {
  onChange: PropTypes.func.isRequired,
};

export default HeroSearch;
