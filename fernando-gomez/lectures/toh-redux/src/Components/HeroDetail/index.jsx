import React, { useParams } from 'react-router-dom';
import HEROES from '../../heroes.mock';

const HeroDetail = () => {
  const { heroId } = useParams();
  console.log(heroId);
  const selectedHero = HEROES.find((hero) => hero.id === +heroId);
  return (
    <>
      <h2>
        {selectedHero.name}
        {' '}
        details
      </h2>
    </>
  );
};
export default HeroDetail;
