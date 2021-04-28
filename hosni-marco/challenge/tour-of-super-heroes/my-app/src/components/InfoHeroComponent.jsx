import React from 'react';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router';
import Heroes from '../assets/Heroes';

function InfoHeroComponent(superhero) {
  const { heroId } = useParams();
  const searchHero = Heroes.find((hero) => hero.id === heroId);
  const hero = { superhero };
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
      <Link className="back__Link" to={`/heroes/${searchHero.id}/Details`}>DETAILS</Link>
    </div>
  );
}

export default InfoHeroComponent;
