/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/prop-types */
import React from 'react';
import PropTypes from 'prop-types';
import SeeMore from './SeeMoreComponent';

const HeroDetail = ({ currentHero, currentHero: { superhero, publisher } }) => (
  <div className="heroesList">
    <h1>{superhero}</h1>
    <p>{publisher}</p>
    <SeeMore hero={currentHero} />
  </div>
);

HeroDetail.prototype = {
  currentHero: PropTypes.object.isRequired,
  id: PropTypes.number.isRequired,
  superhero: PropTypes.string.isRequired,
};

export default HeroDetail;
