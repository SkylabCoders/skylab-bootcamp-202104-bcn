import React from 'react';
import { Link } from 'react-router-dom';
import HEROES from '../Constants/heroes-mock';

function HeroList() {
  return (
    <>
      <h2>Heroes List</h2>
      <div className="heroes-menu">
        {HEROES.map((hero) => <Link to={`/detail/${hero.id}`}>{hero.name}</Link>)}
      </div>
    </>
  );
}
export default HeroList;
