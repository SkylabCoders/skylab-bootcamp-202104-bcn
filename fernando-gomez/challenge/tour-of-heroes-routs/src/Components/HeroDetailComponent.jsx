/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/prop-types */
import React from 'react';
import PropTypes from 'prop-types';

const HeroDetail = ({ currentHero: { id, superhero } }) => (
  <div className="heroesList">
    <h1>{superhero}</h1>
    <p>
      It's Id is
      {' '}
      {id}
    </p>
  </div>
);

HeroDetail.prototype = {
  currentHero: PropTypes.object.isRequired,
  id: PropTypes.number.isRequired,
  superhero: PropTypes.string.isRequired,
};

export default HeroDetail;
