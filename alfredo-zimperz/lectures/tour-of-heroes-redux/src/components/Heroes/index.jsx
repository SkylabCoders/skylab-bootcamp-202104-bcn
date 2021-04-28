import React from 'react';
import { Link } from 'react-router-dom';
import './heroes.css';

const Heroes = () => {
  const HEROES = [
    { id: 11, name: 'Dr Nice' },
    { id: 12, name: 'Narco' },
    { id: 13, name: 'Bombasto' },
    { id: 14, name: 'Celeritas' },
    { id: 15, name: 'Magneta' },
    { id: 16, name: 'RubberMan' },
    { id: 17, name: 'Dynama' },
    { id: 18, name: 'Dr IQ' },
    { id: 19, name: 'Magma' },
    { id: 20, name: 'Tornado' },
  ];

  return (
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
            <Link to={`./heroes/${hero.id}`}>
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
};

export default Heroes;
