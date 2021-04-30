import React from 'react';

function List() {
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
    { id: 20, name: 'Tornado' }
  ];

  return (
    <div className="listNameContainer">
      <ul className="listContainer__ul-Name">
        {heroes.map((hero) => (
          <li>
            {hero.name}
            <button type="button" onClick="ShowDetails({hero.name})">Details</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default List;
