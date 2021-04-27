import React from 'react';
import { useParams } from 'react-router';
import heroes from '../data/heroes';

const AllDetails = () => {
  const { Id } = useParams();
  return (
    <ul>
      {heroes.map((element) => {
        if (element.id === Id) {
          return (
            <>
              <li>
                {`Id: ${element.id}`}
              </li>
              <li>
                {`Name: ${element.name}`}
              </li>
              <li>
                {`Publisher: ${element.publisher}`}
              </li>
              <li>
                {`Alter ego: ${element.alter_ego}`}
              </li>
              <li>
                {`First appearance: ${element.first_appearance}`}
              </li>
              <li>
                {`Characters: ${element.characters}`}
              </li>
            </>
          );
        }
        return null;
      })}
      <li><button type="button">Back</button></li>
    </ul>
  );
};

export default AllDetails;
