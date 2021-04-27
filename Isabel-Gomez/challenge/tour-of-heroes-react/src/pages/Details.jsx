import React from 'react';
import Anchorates from '../components/common/Anchorates';
import Subtitle from '../components/common/Subtitle';
import DetailsList from '../components/DetailsList';

const Details = () => (
  <div>
    <Anchorates text="Dashboard" href="#" />
    <Anchorates text="Heroes" href="#" />
    <Subtitle text="My details!" />
    <DetailsList />
    <Anchorates text="Back" href="#" />
  </div>
);

export default Details;
