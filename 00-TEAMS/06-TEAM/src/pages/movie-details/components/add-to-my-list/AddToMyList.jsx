import React from 'react';
import { PropTypes } from 'prop-types';

const AddToMyList = ({ id, onAddToMyList }) => (
  <div>
    <button type="button" onClick={() => onAddToMyList(id)}>Add to my list</button>
  </div>
);

AddToMyList.propTypes = {
  onAddToMyList: PropTypes.func.isRequired,
  id: PropTypes.number.isRequired
};

export default AddToMyList;
