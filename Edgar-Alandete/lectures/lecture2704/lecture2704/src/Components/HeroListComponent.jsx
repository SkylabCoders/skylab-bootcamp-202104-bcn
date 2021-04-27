import React from 'react';
// import PropTypes from 'prop-types';
import heroes from '../assets/heroes';

const HeroListComponent = () => (
  <ul className="list__container">
    {
        heroes.map(({ id, name }) => <li hey={`${id}-${name}`} className="list__hero-item">{name}</li>)
    }
  </ul>
);

// HeroListComponent.propTypes = {

// };

export default HeroListComponent;
