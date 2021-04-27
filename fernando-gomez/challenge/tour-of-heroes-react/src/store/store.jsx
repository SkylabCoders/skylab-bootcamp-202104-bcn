// import React from 'react';

const getFetchHeroesData = (callback) => {
  fetch('../superHeroData.json')
    .then((response) => response.json())
    .then((data) => {
      console.log('fetching data');
      callback(data);
    });
};

export default getFetchHeroesData;
