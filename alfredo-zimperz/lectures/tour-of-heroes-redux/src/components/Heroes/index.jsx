import React from 'react';
import { Link } from 'react-router-dom';
import HEROES from '../../constants/heroes.mock';
import './heroes.css';

const Heroes = () => (
  <>
    <h2>My Heroes</h2>

    <div>
      <label htmlFor="new-hero" id="new-hero">
        Hero name:
        <input htmlFor="new-hero" />
      </label>
      <button className="add-button" type="button">
        Add hero
      </button>
    </div>

    <ul className="heroes">
      {HEROES.map((hero) => (
        <li key={hero.id}>
          <Link to={`/heroes/${hero.id}`}>
            <span className="badge">{hero.id}</span>
            {' '}
            {hero.name}
          </Link>
          <button
            className="delete"
            title="delete hero"
            type="button"
          >
            x
          </button>
        </li>
      ))}

    </ul>
  </>
);

export default Heroes;
