import React from 'react';
import { useParams } from 'react-router-dom';
import HEROES from '../../constants/heroes.mock';
import './heroDetail.css';

const HeroDetail = () => {
  const { heroId } = useParams();
  const { id, name } = HEROES.find((hero) => hero.id === +heroId);
  return (
    <section className="hero">
      <h2>
        {name.toUpperCase()}
        {' '}
        Details
      </h2>
      <div>
        <span>id: </span>
        {id}
      </div>
      <div>
        <label htmlFor="hero-name">
          Hero name:
          <input htmlFor="hero-name" id="hero-name" placeholder="Hero name" />
        </label>

      </div>
      <button type="button">go back</button>
      <button type="button">save</button>
    </section>

  );
};

export default HeroDetail;
