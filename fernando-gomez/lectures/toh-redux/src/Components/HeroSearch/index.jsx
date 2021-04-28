import React from 'react';
import './heroSearch.css';
import { PropTypes } from 'prop-types';

const HeroSearch = ({ onChange }) => (
  <>
    <h2>Hero Search</h2>
    <input
      onChange={onChange}
    />
  </>
);

HeroSearch.propTypes = {
  onChange: PropTypes.func.isRequired,
};

export default HeroSearch;
