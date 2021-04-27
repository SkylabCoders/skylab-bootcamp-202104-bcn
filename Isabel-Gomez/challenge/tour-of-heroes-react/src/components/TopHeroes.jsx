import React from 'react';
import { Link } from 'react-router-dom';
import heroes from '../data/heroes';

const TopHeroes = () => (
  <div className="topHeroes-container">
    <ul className="topHeroes__items">
      {heroes.slice(0, 4).map((element) => (
        <>
          <li key={element.id}>
            <Link to={`/details/${element.id}`}>{element.name}</Link>
          </li>
        </>
      ))}
    </ul>
  </div>
);

export default TopHeroes;
