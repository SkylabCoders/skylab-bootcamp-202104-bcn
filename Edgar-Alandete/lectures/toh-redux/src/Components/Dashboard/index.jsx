import React from 'react';
import './style.css';
import { Link } from 'react-router-dom';
import heroes from '../../constants/heroes.mock';

function Dashboard() {
  return (
    <>
      <h2>Top Heroes</h2>
      <div className="heroes-menu">
        {heroes.slice(0, 4).map(({ name, id }) => <Link to={`/detail/${id}`}>{name}</Link>)}
      </div>
    </>
  );
}

export default Dashboard;
