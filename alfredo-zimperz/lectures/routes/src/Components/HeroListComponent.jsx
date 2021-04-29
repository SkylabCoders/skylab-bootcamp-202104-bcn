import React from 'react';
import PropTypes from 'prop-types';
import HeroDetailComponent from './HeroDetailComponent';

const HeroListComponent = ({ li1 }) => (
  <ul>
    <li>
      <HeroDetailComponent id={1} name="Elvis" />
    </li>
    <li>{li1}</li>
    <li>Hola</li>
    <li>Hola</li>
    <li>Hola</li>
    <li>Hola</li>
  </ul>
);

HeroListComponent.propTypes = {
  li1: PropTypes.string,
};

HeroListComponent.defaultProps = {
  li1: 'Hola',
};

export default HeroListComponent;
