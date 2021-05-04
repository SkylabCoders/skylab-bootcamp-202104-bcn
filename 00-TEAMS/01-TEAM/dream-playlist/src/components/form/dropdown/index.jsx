import React from 'react';
import PropTypes from 'prop-types';

function Dropdown({ filter }) {
  return (
    <label htmlFor={filter.category}>
      {filter.category}
      <select name={filter.category} selected="selected">
        <option disabled selected value> -- select an option -- </option>
        <option value={filter.options[0]}>{filter.options[0]}</option>
        <option value={filter.options[1]}>{filter.options[1]}</option>
        <option value={filter.options[2]}>{filter.options[2]}</option>
        <option value={filter.options[3]}>{filter.options[3]}</option>
      </select>
    </label>
  );
}

Dropdown.propTypes = {
  filter: PropTypes.shape({
    category: PropTypes.string.isRequired,
    options: PropTypes.shape([]).isRequired
  }).isRequired
};

export default Dropdown;
