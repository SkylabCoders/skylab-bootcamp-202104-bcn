import React from 'react';
import { Link } from 'react-router-dom';
import HeroSearch from '../HeroSearch';
import HEROES from '../../Constants/heroes.mock';

const Dashboard = () => (
  <>
    <h2>Top heroes</h2>
    <HeroSearch />
    <div className="heroes-menu">
      {HEROES.slice(1, 5).map((hero) => <Link to={`/detail/${hero.id}`}>{hero.name}</Link>)}
    </div>
  </>
);

export default Dashboard;
