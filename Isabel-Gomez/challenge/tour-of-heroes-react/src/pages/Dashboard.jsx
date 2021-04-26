import React from 'react';
import Title from '../components/common/Title';
import Anchorates from '../components/common/Anchorates';
import Subtitle from '../components/common/Subtitle';
import TopHeroes from '../components/TopHeroes';

const Dashboard = () => (
  <div>
    <Title text="Tour of Heroes" />
    <Anchorates text="Dashboard" href={null} />
    <Anchorates text="Heroes" href="#" />
    <Subtitle text="Top Heroes" />
    <TopHeroes />
  </div>
);

export default Dashboard;
