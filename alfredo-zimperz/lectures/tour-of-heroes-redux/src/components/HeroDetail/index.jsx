import React from 'react';
import { useParams } from 'react-router-dom';
import HEROES from '../../constants/heroes.mock';
import './heroDetail.css';

const HeroDetail = () => {
  const { heroId } = useParams();
  const selectedHero = HEROES.find((hero) => hero.id === +heroId);
  return (
    // <div>
    //   <h2>
    //     {selectedHero.name}
    //     {' '}
    //     details
    //   </h2>
    // </div>
    <div className="hero">
      <h2>
        {selectedHero.name.toUpperCase()}
        {' '}
        Details
      </h2>
      <div>
        <span>id: </span>
        {selectedHero.id}
      </div>
      <div>
        <label htmlFor="hero-name">
          Hero name:
          <input htmlFor="hero-name" id="hero-name" placeholder="Hero name" />
        </label>

      </div>
      <button type="button">go back</button>
      <button type="button">save</button>
    </div>

  );
};

export default HeroDetail;
