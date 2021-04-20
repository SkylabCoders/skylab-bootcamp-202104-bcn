const { getHeroes } = require('./heroes.service');

describe('Given a getHeroes function', () => {
  describe('When is invoked', () => {
    beforeEach(() => {
      globalThis.heroes = [{ name: 'Narco' }, { name: 'Bombasto' }];
    });
    test('Then return an array of string', () => {
      expect(getHeroes()).toEqual(['Narco', 'Bombasto']);
    });
    test('Then return an array with lenght equals 2', () => {
      expect(getHeroes().length).toBe(2);
    });
  });
});
