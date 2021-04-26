import React from 'react';

const heroes = [
  { id: 11, name: 'Dr Nice' },
  { id: 12, name: 'Narco' },
  { id: 13, name: 'Bombasto' },
  { id: 14, name: 'Celeritas' }
];

const FourHeroes = () => (
  <ul>
    <li>{heroes.name}</li>
    <li>{heroes.name}</li>
    <li>{heroes.name}</li>
    <li>{heroes.name}</li>
  </ul>
);

export default FourHeroes;
