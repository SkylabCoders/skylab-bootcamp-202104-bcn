import React from 'react';
import PropTypes from 'prop-types';

function Dropdown({ category, options }) {
  return (
    <label htmlFor={category}>
      {category}
      <select name={category} selected="selected">
        <option disabled selected value>
          {' '}
          -- select
          {' '}
          {category}
          {' '}
          --
          {' '}
        </option>
        {
        options.map((optionData) => (
          (<option value={optionData}>{optionData}</option>)))
        }
      </select>
    </label>
  );
}

Dropdown.propTypes = {
  category: PropTypes.string.isRequired,
  options: PropTypes.shape([]).isRequired
};

export default Dropdown;
