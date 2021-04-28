import React from 'react';
import { Link } from 'react-router-dom';
import './Dashboard.css';
import HEROES from '../Constants/Heroes.mock';

function Dashboard() {
  return (
    <>
      <h2>Top Heroes</h2>

      <div className="heroes-menu">
        {HEROES.slice(1, 5).map((heroe) => <Link to={`/detail/${heroe.id}`}>{heroe.name}</Link>)}
      </div>
    </>
  );
}
export default Dashboard;
