import React from 'react';
import './dashboard.css';
import { Link } from 'react-router-dom';
import HEROES from '../constants/heroes.mock';

function Dashboard() {
  return (
    <>
      <h2>Top Heroes</h2>
      <div className="heroes-menu">
        {HEROES.slice(1, 5).map((hero) => <Link to={`/detail/${hero.id}`}>{hero.name}</Link>)}

      </div>

    </>

  );
}

export default Dashboard;
