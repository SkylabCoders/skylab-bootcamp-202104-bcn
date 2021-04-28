import React from 'react';
import { Link } from 'react-router-dom';
import './heroeslist.css';
import heroes from '../../assets/heroes';

function HeroesList() {
  return (
    <>
      <h2>Top Heroes</h2>
      <div className="heroes-menu">
        {heroes.map((hero) => <Link to={`/detail/${hero.id}`}>{hero.name}</Link>)}
      </div>
      <form>
        <h3>Hero Search</h3>
        <input type="text" />
      </form>
    </>
  );
}
export default HeroesList;
