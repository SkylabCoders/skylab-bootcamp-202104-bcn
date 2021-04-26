import React from 'react';
import Anchorates from '../components/common/Anchorates';
import Subtitle from '../components/common/Subtitle';
import HeroesList from '../components/HeroesList';

const Heroes = () => (
  <div>
    <Anchorates text="Dashboard" href="#" />
    <Anchorates text="Heroes" href={null} />
    <Subtitle text="My Heroes" />
    <HeroesList />
    <Anchorates text="View Details" href="#" />

  </div>
);

export default Heroes;
