import React from 'react';

function InfoHeroComponent(superhero) {
  const hero = superhero;
  return (
    <div>
      <p>
        Alter ego:
        {' '}
        { hero.alterEgo }
      </p>
      <p>
        Publisher:
        {' '}
        {hero.publisher}

      </p>
    </div>
  );
}
export default InfoHeroComponent;
