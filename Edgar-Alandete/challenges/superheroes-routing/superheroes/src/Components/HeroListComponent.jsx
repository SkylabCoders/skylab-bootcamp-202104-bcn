import React, { useState } from 'react';
import heroes from '../assets/heroes';
import HeroListItemComponent from './HeroListItemComponent';

const HeroListComponent = () => {
  const [selectedHero, selectHero] = useState(null);

  function onHandleSelectedHero(hero) {
    selectHero(hero);
  }

  return (
    <>
      <h1>Super Heroes</h1>
      <ul className="list__container">
        {
        heroes
        && heroes.map(
          ({
            id, superhero, publisher, alterEgo,
          }) => (
            <HeroListItemComponent
              id={id}
              superhero={superhero}
              publisher={publisher}
              alterEgo={alterEgo}
              selectHero={onHandleSelectedHero}
              selectedHero={selectedHero}
            />
          ),
        )
      }
      </ul>
    </>
  );
};

export default HeroListComponent;
