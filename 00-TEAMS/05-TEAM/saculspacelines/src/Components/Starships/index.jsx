import React from 'react';
import STARSHIPS from '../../redux/Constants/Starships';
import './form.css';

const Starships = () => (
  STARSHIPS.map(
    ((starship) => (
      <>
        <li
          key={starship.name}
          className="list-element"
        >
          {starship.name}
          {starship.faction}
          <img
            src={starship.imgUrl}
            alt={starship.name}
            className="list-element__image"
          />
        </li>
      </>
    ))
  )
);

export default Starships;
