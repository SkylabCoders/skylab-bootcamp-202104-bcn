import React from 'react';

function Details() {
  const heroes = [
    { id: 11, name: 'Dr Nice' },
    { id: 12, name: 'Narco' },
    { id: 13, name: 'Bombasto' },
    { id: 14, name: 'Celeritas' },
    { id: 15, name: 'Magneta' },
    { id: 16, name: 'RubberMan' },
    { id: 17, name: 'Dynama' },
    { id: 18, name: 'Dr IQ' },
    { id: 19, name: 'Magma' },
    { id: 20, name: 'Tornado' },
  ];

  const listItems = heroes.map((heroe) => (
    <li>
      El heroe
      {' '}
      {heroe.name}
      {' '}
      tiene la id:
      {' '}
      {heroe.id}
    </li>
  ));
  return (
    <div>
      <h2>My heroes details</h2>
      <ul>{listItems}</ul>
    </div>
  );
}

export default Details;
