import React from 'react';
import { Link } from 'react-router-dom';
import './Dashboard.css';
import HEROES from '../../constants/heroes.mock';

function Dashboard() {
  return (
    <>
      <h2>Top Heroes</h2>
      <div key="a" className="heroes-menu">
        {HEROES.slice(1, 5).map((hero) => <Link to={`/Detail/${hero.id}`}>{hero.name}</Link>)}
      </div>
    </>
  );
}

export default Dashboard;
