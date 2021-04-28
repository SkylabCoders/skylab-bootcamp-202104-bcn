import React from 'react';
import './dashboard.css';
import heroes from '../../assets/heroes';

function Dashboard() {
  return (
    <>
      <h2>Top Heroes</h2>
      <div className="heroes-menu">
        {heroes.slice(1, 5).map((hero) => <a href="./">{hero.name}</a>)}
      </div>
      <form>
        <h3>Hero Search</h3>
        <input type="text" />
      </form>
    </>
  );
}
export default Dashboard;
