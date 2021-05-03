import React from 'react';
import PLANETS from '../../redux/Constants/Planets';
import './form.css';

const Planets = () => (
  PLANETS.map(
    ((planets) => (
      <>
        <li
          key={planets.name}
          className="list-element"
        >
          {planets.name}
          {planets.faction}
          <img
            src={planets.url}
            alt={planets.name}
            className="list-element__image"
          />
        </li>
      </>
    ))
  )
);

export default Planets;
