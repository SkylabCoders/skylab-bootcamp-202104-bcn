import React from 'react';
import Title from '../components/common/Title';
import Anchorates from '../components/common/Anchorates';
import Subtitle from '../components/common/Subtitle';
import AllDetails from '../components/AllDetails';

const HeroesDetails = () => (
  <div>
    <Title text="Tour of Heroes" />
    <Anchorates text="Dashboard" to="/dashboard" />
    <Anchorates text="Heroes" to="/heroes" />
    <Subtitle text="All details!" />
    <AllDetails />
  </div>
);

export default HeroesDetails;
