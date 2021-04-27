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
    { id: 20, name: 'Tornado' }
  ];

  // const ShowDetails = (heroName) => {
  //   console.log(hero);
  // };

  return (
    <div className="listContainerDetails">
      <ul className="listContainer__ul-Details">
        {heroes.map((hero) => (
          <li>
            <p>
              The Name of the HERO is
              {' '}
              {hero.name}
              {' '}
              {' '}
              and his ID is
              {' '}
              {hero.id}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Details;
