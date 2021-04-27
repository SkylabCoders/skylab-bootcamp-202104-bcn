import React from 'react';
// import PropTypes from 'prop-types';
import { useParams } from 'react-router';
import heroes from '../assets/heroes';
// { id }
const HeroDetailComponent = () => {
  const { heroId } = useParams();
  const myHero = heroes.find((hero) => hero.id === parseInt(heroId, 10));

  return (
    <article>
      <button type="button" onClick={() => { console.log('closo'); }}>Close</button>
      <h2>{myHero.name}</h2>
      <p>ghiobgjidfjisfvisufnsnvsinvusivfsiun</p>
    </article>
  );
};
// HeroDetailComponent.propTypes = {
//   id: PropTypes.number.isRequired,
// };

export default HeroDetailComponent;
