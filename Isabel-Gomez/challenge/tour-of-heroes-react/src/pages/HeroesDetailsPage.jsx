import React from 'react';
import Title from '../components/common/Title';
import Anchorates from '../components/common/Anchorates';
import Subtitle from '../components/common/Subtitle';
import AllDetails from '../components/AllDetails';

const HeroesDetailsPage = () => (
  <div>
    <Title text="Tour of Heroes" />
    <Anchorates text="Dashboard" href="#" />
    <Anchorates text="Heroes" href={null} />
    <Subtitle text="All details!" />
    <AllDetails />
  </div>
);

export default HeroesDetailsPage;
