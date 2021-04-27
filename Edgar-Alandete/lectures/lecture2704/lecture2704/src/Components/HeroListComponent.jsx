import React from 'react';
// import PropTypes from 'prop-types';
import heroes from '../assets/heroes';
import HeroListItemComponent from './HeroListItemComponent';

const HeroListComponent = () => (
  <ul className="list__container">
    {
        heroes.map(({ id, name }) => <HeroListItemComponent key={`${id}-${name}`} id={id} name={name} />)
    }
  </ul>
);

// HeroListComponent.propTypes = {

// };

export default HeroListComponent;
