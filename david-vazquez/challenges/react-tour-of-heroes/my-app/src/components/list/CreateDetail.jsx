/* eslint-disable react/prop-types */
import React from 'react';
import { Link } from 'react-router-dom';

function CreateDetail({ hero }) {
  return (
    <ul>
      <li>
        Alter-ego:
        {' '}
        {hero.alter_ego}
      </li>
      <li>
        Publisher:
        {' '}
        {hero.publisher}
      </li>
      <li>
        <Link to={`heroes/${hero.id}`}>
          View more
        </Link>
      </li>
    </ul>
  );
}

export default CreateDetail;
