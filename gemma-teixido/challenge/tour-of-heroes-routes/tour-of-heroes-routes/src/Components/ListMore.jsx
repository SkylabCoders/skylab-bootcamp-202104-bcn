/* eslint-disable react/prop-types */
import React from 'react';
import { Link } from 'react-router-dom';

const ListMore = ({ hero }) => (
  <div className="listMore">
    <ul className="listMore_ul">
      <li className="heroeSmallInfo">
        Publisher of the hero =
        {hero.publisher}
        {' '}
      </li>
      <li>
        ID of the hero =
        {' '}
        {hero.id}
      </li>
      <Link to={`/heroes/${hero.id}`}>
        MORE DETAILS
      </Link>
    </ul>
  </div>
);

export default ListMore;
