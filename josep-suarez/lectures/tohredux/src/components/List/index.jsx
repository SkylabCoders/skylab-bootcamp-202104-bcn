import React from 'react';
import { Link } from 'react-router-dom';
import heroes from '../../services/heroes';

function ListHeroes() {
  return (
    <>
      {heroes.map((hero) => (<Link to={`/detail/${hero.id}`}>{`${hero.id}-${hero.name}`}</Link>))}
    </>
  );
}
export default ListHeroes;
