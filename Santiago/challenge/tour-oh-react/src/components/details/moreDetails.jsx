/* eslint-disable react/prop-types */
import React from 'react';
import { Link } from 'react-router-dom';

const MoreDetails = ({ hero }) => (
  <div>
    <ul>
      <li>
        Publisher --
        {hero.publisher}
      </li>
      <li>
        ID of the hero --
        {hero.id}
      </li>
      <Link to={`/details/${hero.id}`}>
        See full details
      </Link>
    </ul>
  </div>
);

export default MoreDetails;
