import React from 'react';
import { useParams } from 'react-router-dom';
import './detail.css';
import heroes from '../../services/heroes';

function Detail() {
  const { heroId } = useParams();
  {
    const selectedHero = heroes.find((hero) => hero.id.toString() === heroId);
    return (
      <>
        <h2>Hero Details</h2>
        <h3>
          name:
          {' '}
          {selectedHero.name}
        </h3>
        <h3>
          id:
          {' '}
          {selectedHero.id}
        </h3>
      </>
    );
  }
}

export default Detail;
