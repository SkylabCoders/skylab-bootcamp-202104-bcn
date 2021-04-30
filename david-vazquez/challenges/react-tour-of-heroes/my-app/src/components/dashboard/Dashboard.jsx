import React from 'react';

function Dashboard() {
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

  const listItems = heroes.slice(1, 5).map((heroe) => <li>{heroe.name}</li>);
  return (
    <div>
      <h2>My top Heroes</h2>
      <ul>{listItems}</ul>
    </div>
  );
}

export default Dashboard;
