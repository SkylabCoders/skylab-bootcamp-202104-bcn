import React from 'react';
import { Link } from 'react-router-dom';
import HEROES from '../../services/heroes';

function ListHeroes() {
  return (
    <>
      {HEROES.map((hero) => (<Link to={`/detail/${hero.id}`}>{`${hero.id}-${hero.name}`}</Link>))}
    </>
  );
}
export default ListHeroes;
