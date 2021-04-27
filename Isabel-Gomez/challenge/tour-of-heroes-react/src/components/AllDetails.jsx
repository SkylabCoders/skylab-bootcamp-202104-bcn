import React from 'react';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import heroes from '../data/heroes';

const AllDetails = () => {
  const { Id } = useParams();
  return (
    <ul>
      {heroes.map((element) => {
        if (element.id === Id) {
          return (
            <>
              <li key="id">
                {`Id: ${element.id}`}
              </li>
              <li key="name">
                {`Name: ${element.name}`}
              </li>
              <li key="publisher">
                {`Publisher: ${element.publisher}`}
              </li>
              <li key="alter_ego">
                {`Alter ego: ${element.alter_ego}`}
              </li>
              <li key="first_appearance">
                {`First appearance: ${element.first_appearance}`}
              </li>
              <li key="characters">
                {`Characters: ${element.characters}`}
              </li>
            </>
          );
        }
        return null;
      })}
      <li><Link to="/heroes">Back</Link></li>
    </ul>
  );
};

export default AllDetails;
