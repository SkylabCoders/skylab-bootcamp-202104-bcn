import React from 'react';

const AllDetails = ({ data }) => (

  <ul>
    <li>
      {`Id: ${data.id}`}
    </li>
    <li>
      {`Name: ${data.name}`}
    </li>
    <li>
      {`Publisher: ${data.publisher}`}
    </li>
    <li>
      {`Alter ego: ${data.alter_ego}`}
    </li>
    <li>
      {`First appearance: ${data.first_appearance}`}
    </li>
    <li>
      {`Characters: ${data.characters}`}
    </li>
    <li><button type="button">Back</button></li>
  </ul>

);

export default AllDetails;
