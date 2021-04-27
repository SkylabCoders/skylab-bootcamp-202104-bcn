import React, { useState } from 'react';
import AllDetails from './AllDetails';

const Details = ({ data }) => {
  const [showAllDetails, setShowAllDetails] = useState(false);
  return (
    <ul>
      <li>
        {`Publisher: ${data.publisher}`}
      </li>
      <li>
        {`Alter ego: ${data.alter_ego}`}
      </li>
      <li><button type="button" onClick={() => setShowAllDetails(!showAllDetails)}>More details</button></li>
      {showAllDetails && <AllDetails data={data} />}
    </ul>
  );
};

export default Details;
