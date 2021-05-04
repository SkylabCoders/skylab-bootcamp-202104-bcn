import React, { useState } from 'react';
import Details from '../Details';

const Card = ({ data }) => {
  const [showDetails, setShowDetails] = useState(false);

  return (
    <>
      <li>
        <button type="button" onClick={() => setShowDetails(!showDetails)}>+</button>
        {data.name}
      </li>
      {showDetails && <Details data={data} />}
    </>
  );
};

export default Card;
