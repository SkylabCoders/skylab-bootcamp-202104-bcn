import React from 'react';
import './style.css';
import heroes from '../../assets/heroes';

function Dashboard() {
  return (
    <>
      <h2>Top Heroes</h2>
      <div className="heroes-menu">
        {heroes.slice(0, 4).map(({ name }) => <a href=" ">{name}</a>)}
      </div>
    </>
  );
}

export default Dashboard;
