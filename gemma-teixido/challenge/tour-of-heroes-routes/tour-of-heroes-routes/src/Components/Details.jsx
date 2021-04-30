/* eslint-disable react/prop-types */
import React from 'react';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router';
import heroes from '../utils';

function Details() {
  const { heroID } = useParams();
  const myHeroes = heroes.find((hero) => hero.id === heroID);

  return (
    <div className="Details">
      <ul className="Details_ul">
        <li>
          ID of the hero =
          {' '}
          {myHeroes.id}
        </li>
        <li>
          First appearance of the hero =
          {' '}
          {myHeroes.first_appearance}
        </li>
        <li>
          Character of the hero =
          {' '}
          {myHeroes.characters}
          <Link to={`/heroes/:heroID${myHeroes.id}`} />
        </li>
      </ul>
    </div>
  );
}

export default Details;
