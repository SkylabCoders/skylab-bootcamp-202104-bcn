import React from 'react';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import Heroes from '../assets/Heroes';

function DetailHeroComponent() {
  const { heroId } = useParams();
  const searchHero = Heroes.find((hero) => hero.id === heroId);
  return (
    <article>
      <p>
        Id:
        {searchHero.id}
      </p>
      <p>
        Superhero:
        {searchHero.superhero}
      </p>
      <p>
        Publisher:
        {' '}
        {searchHero.publisher}
      </p>
      <p>
        Alter ego:
        {' '}
        {searchHero.alterEgo}
      </p>
      <p>
        First appearance:
        {' '}
        {searchHero.first_appearance}
      </p>
      <p>
        Characters:
        {' '}
        {searchHero.characters}
      </p>
      <Link className="return-dashboard" to="/heroes">Return</Link>
    </article>
  );
}

export default DetailHeroComponent;
