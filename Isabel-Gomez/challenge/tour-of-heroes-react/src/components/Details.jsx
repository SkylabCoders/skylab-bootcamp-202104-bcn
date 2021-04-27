import React from 'react';

const Details = ({ data }) => (

  <ul>
    <li>
      {`Publisher: ${data.publisher}`}
    </li>
    <li>
      {`Alter ego: ${data.alter_ego}`}
    </li>
    <li><button type="button">More details</button></li>
  </ul>

);

export default Details;
