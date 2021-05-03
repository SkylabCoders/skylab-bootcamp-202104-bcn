import React from 'react';
import Title from '../components/common/Title';
import Anchorates from '../components/common/Anchorates';
import Subtitle from '../components/common/Subtitle';
import TopHeroes from '../components/TopHeroes';

const Dashboard = () => (
  <div>
    <Title text="Tour of Heroes" />
    <Anchorates text="Dashboard" />
    <Anchorates text="Heroes" to="/heroes" />
    <Subtitle text="Top Heroes" />
    <TopHeroes />
  </div>
);

export default Dashboard;
