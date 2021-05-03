import React from 'react';
import { Link } from 'react-router-dom';

const Details = ({ data }) => (
  <ul>
    <li>
      {`Publisher: ${data.publisher}`}
    </li>
    <li>
      {`Alter ego: ${data.alter_ego}`}
    </li>
    <li>
      <Link to={`/details/${data.id}`}>More Details</Link>
    </li>
  </ul>
);
export default Details;
