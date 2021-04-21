const getFetchHeroesData = async () => {
  const data = await (await fetch('./../store/superHeroData.json')).json();
  data.forEach((hero) => {
    getList(hero);
  });
};

getFetchHeroesData();
