import React from 'react';
import './style.css';
import heroes from '../../assets/heroes';

function Dashboard() {
  return (
    <>
      <h2>Top Heroes</h2>
      <div className="heroes-menu">
        {heroes.slice(1, 4).map(({ name }) => <a href=" ">{name}</a>)}
        <a href=" ">Batman</a>
      </div>
    </>
  );
}

export default Dashboard;
