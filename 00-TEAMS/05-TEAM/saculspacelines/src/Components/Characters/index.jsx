import React from 'react';
import CHARACTERS from '../../redux/Constants/Characters';
import './form.css';

const Characters = () => (
  CHARACTERS.map(
    ((character) => (
      <>
        <li
          key={character.name}
          className="list-element"
        >
          {character.name}
          {character.faction}
          <img
            src={character.url}
            alt={character.name}
            className="list-element__image"
          />
        </li>
      </>
    ))
  )
);

export default Characters;
