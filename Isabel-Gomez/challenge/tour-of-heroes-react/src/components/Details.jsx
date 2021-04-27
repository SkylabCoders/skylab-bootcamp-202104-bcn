import React, { useState } from 'react';
import { Link } from 'react-router-dom';

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
      {showAllDetails && <Link to={`./AllDetails/${data.id}`} />}
    </ul>
  );
};

export default Details;
