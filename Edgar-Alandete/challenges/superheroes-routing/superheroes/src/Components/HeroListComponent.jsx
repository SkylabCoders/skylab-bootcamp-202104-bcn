import React, { useState } from 'react';
import heroes from '../assets/heroes';
import HeroListItemComponent from './HeroListItemComponent';

const HeroListComponent = () => {
  const [selectedHero, selectHero] = useState(null);

  function onHandleSelectedHero(hero) {
    selectHero(hero);
  }

  return (
    <ul className="list__container">
      {
        heroes
        && heroes.map(
          // eslint-disable-next-line camelcase
          ({
            // eslint-disable-next-line camelcase
            id, superhero, publisher, alter_ego,
          }) => (
            <HeroListItemComponent
              id={id}
              superhero={superhero}
              publisher={publisher}
              // eslint-disable-next-line camelcase
              alterEgo={alter_ego}
              selectHero={onHandleSelectedHero}
              selectedHero={selectedHero}
            />
          ),
        )
  }
    </ul>
  );
};

export default HeroListComponent;
