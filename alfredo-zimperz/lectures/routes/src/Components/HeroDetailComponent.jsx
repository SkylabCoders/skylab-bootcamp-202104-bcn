import React from 'react';
import PropTypes from 'prop-types';

const HeroDetailComponent = ({ id, name }) => (
  <div>
    <h1>Hero Detail</h1>
    <h2>
      Id:
      {' '}
      {id}
      {' '}
      - Name:
      {' '}
      {name}

    </h2>
  </div>

);

HeroDetailComponent.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  // With an object prop:
  //   hero: PropTypes.shape({
  //     id: PropTypes.number,
  //     name: PropTypes.string,
  //   }).isRequired,

};

export default HeroDetailComponent;
