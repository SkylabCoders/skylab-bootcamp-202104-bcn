import React from 'react';
import FourHeroes from './four-heroes-list';

const Dashboard = () => (
  <header className="header">
    <h1>TOP HEROES</h1>
    <ul>
      <li>
        <a href="../dashboard/mainDashboard.jsx">Dashboard</a>
      </li>
      <li>
        <a href="../list/mainList.jsx">Heroes</a>
      </li>
    </ul>
    <FourHeroes />
  </header>
);

export default Dashboard;
