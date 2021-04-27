function getAllHeroes(url) {
  return fetch(url)
    .then((response) => response.json())
    .then((data) => data);
}

describe('Given a getAllHeroes function', () => {
  const scenarios = [{
    url: 'https://jsonplaceholder.typicode.com/posts/1',
    result: {
      userId: 1,
      id: 1,
      title: 'sunt aut facere repellat provident occaecati excepturi optio reprehenderit',
      body: 'quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto',
    },
  }];

  scenarios.forEach((scenario) => {
    describe(`When invoked with value ${scenario.url}`, () => {
      test(`Then return ${scenario.result}`, () => {
        const finalRes = getAllHeroe(scenario.url);
        expect(finalRes).toEqual(scenario.result);
      });
    });
  });
});
