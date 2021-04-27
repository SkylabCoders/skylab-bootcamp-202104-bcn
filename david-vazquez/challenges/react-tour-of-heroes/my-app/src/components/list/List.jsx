import React, { useState } from 'react';
import heroes from '../../assets/heroes';
import CreateDetail from './CreateDetail';

function List() {
  const [selectedHero, setSelectedHero] = useState(null);
  return (
    <div>
      <h2>My heroes list</h2>
      <ul className="list__container">
        {heroes.map((hero) => (
          <li className="list__hero-item">
            {hero.superhero}
            <button type="button" onClick={() => setSelectedHero(hero)}>INFO</button>
            {selectedHero === hero && <CreateDetail hero={hero} />}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default List;
