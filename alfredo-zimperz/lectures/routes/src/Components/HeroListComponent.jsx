import React from 'react';
import PropTypes from 'prop-types';

const HeroListComponent = ({ li1 }) => (
  <ul>
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
  li1: '',
};

export default HeroListComponent;
