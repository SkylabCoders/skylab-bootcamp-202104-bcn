import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './detail.css';
import heroes from '../../services/heroes';

function Detail() {
  const { heroId } = useParams();
  const [selectedHero, setSelectedHero] = useState();
  useEffect(() => {
    setSelectedHero(heroes.find((hero) => hero.id === +heroId));
  }, [heroId]);
  return (
    <>
      <h2>Hero Details</h2>
      <h3>
        name:
        {' '}
        {selectedHero?.name}
      </h3>
      <h3>
        id:
        {' '}
        {selectedHero?.id}
      </h3>
      <input type="text" placeholder="Hero name" value={selectedHero?.name} />
      <button type="button">Go Back</button>
      <button type="button">Save</button>
    </>
  );
}

export default Detail;
