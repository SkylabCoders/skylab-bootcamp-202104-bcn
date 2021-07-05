/* eslint-disable react/no-array-index-key */
/* eslint-disable react/prop-types */
import React from 'react';
import PropTypes from 'prop-types';
import HeroDetail from './HeroDetailComponent';

const HeroesList = ({ heroesList, setAsSelected, currentHero }) => (
  <ul className="heroesList">
    {heroesList.map((hero, key) => (
      <li>
        <button type="button" key={key} onClick={() => setAsSelected(hero)} className="heroListElement">
          +
        </button>
        {hero.superhero}
        {currentHero && (currentHero.id === hero.id) && <HeroDetail currentHero={currentHero} />}
      </li>
    ))}
  </ul>
);

HeroesList.prototype = {
  heroesList: PropTypes.object.isRequired,
  setAsSelected: PropTypes.func.isRequired,
};

export default HeroesList;
