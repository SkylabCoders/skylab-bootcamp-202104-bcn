import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './detail.css';
import HEROES from '../../services/heroes';

function Detail() {
  const { heroId } = useParams();
  const [selectedHero, setSelectedHero] = useState();
  useEffect(() => {
    setSelectedHero(HEROES.find((hero) => hero.id === +heroId));
  }, [heroId]);
  function handleNameChange(event) {
    setSelectedHero({
      ...selectedHero,
      name: event.target.value
    });
  }
  return (
    selectedHero ? (
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
        <input type="text" placeholder="Hero name" value={selectedHero?.name} onChange={handleNameChange} />
        <button type="button">Go Back</button>
        <button type="button">Save</button>
      </>
    )
      : <h2>No hay heroe!</h2>
  );
}

export default Detail;
