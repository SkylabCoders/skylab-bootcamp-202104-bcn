/* eslint-disable react/no-array-index-key */
/* eslint-disable react/prop-types */
import React from 'react';
import PropTypes from 'prop-types';

const HeroesList = ({ heroesList, setAsSelected }) => (
  <div className="heroesList">
    {heroesList.map((hero, key) => (
      <li>
        <button type="button" key={key} onClick={() => setAsSelected(hero)} className="heroListElement">
          Q
        </button>
        {hero.superhero}
      </li>
    ))}
  </div>
);

HeroesList.prototype = {
  heroesList: PropTypes.object.isRequired,
  setAsSelected: PropTypes.func.isRequired,
};

export default HeroesList;
