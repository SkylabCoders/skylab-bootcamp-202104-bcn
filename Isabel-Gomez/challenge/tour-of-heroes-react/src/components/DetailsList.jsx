import React from 'react';
import heroes from '../data/heroes';

const DetailsList = () => (
  <div>
    <ul>
      {heroes.map((element) => (
        <ul key={element.id}>
          <li>{element.id}</li>
          <li><input value={element.name} type="text" /></li>
        </ul>
      ))}
    </ul>
  </div>

);

export default DetailsList;
