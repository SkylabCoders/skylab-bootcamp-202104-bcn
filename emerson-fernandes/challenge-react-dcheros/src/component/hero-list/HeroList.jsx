import React, { useState } from 'react';
import store from '../store/store';

const HeroList = () => {
  const [heroes] = useState(store);

  return (
    <ul>
      {heroes.map((item) => <button type="button">{item.superhero}</button>)}
    </ul>
  );
};

export default HeroList;
