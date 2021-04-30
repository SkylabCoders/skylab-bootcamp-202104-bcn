import React from 'react';
import { Link } from 'react-router-dom';

const ShortHeroDetailComponent = ({ alterEgo, publisher, id }) => {
  <>
    <p>
      Alter Ego:
      {' '}
      {alterEgo}
    </p>
    <p>
      Published by:
      {' '}
      {publisher}
    </p>
    <Link to={`./${id}`}>
      Ver más
    </Link>
  </>;
};

export default ShortHeroDetailComponent;
