import React from 'react';
import PropTypes from 'prop-types';

function Dropdown({ filter }) {
  return (
    <label htmlFor={filter.category}>
      {filter.category}
      <select name={filter.category} selected="selected">
        <option disabled selected value> -- select an option -- </option>
        {
        filter.options.map((optionData) => (
          (<option value={optionData}>{optionData}</option>)))
        }
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
