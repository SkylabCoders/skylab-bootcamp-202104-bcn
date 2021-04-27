import React from 'react';
import Title from '../components/common/Title';
import Anchorates from '../components/common/Anchorates';
import Subtitle from '../components/common/Subtitle';
import HeroesList from '../components/HeroesList';

const HeroesPage = () => (
  <div>
    <Title text="Tour of Heroes" />
    <Anchorates text="Dashboard" to="/dashboard" />
    <Anchorates text="Heroes" />
    <Subtitle text="The Heroes" />
    <HeroesList />
  </div>
);

export default HeroesPage;
