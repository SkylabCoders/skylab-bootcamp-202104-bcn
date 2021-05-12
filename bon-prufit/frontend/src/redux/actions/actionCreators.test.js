import axios from 'axios';
import loadProducts, { loadHeroes, loadHeroesAxios } from './actionCreators';

import actionTypes from './actionTypes';

jest.mock('axios');

describe('loadProducts', () => {
  test('should dispatch LOAD_PRODUCTS', async () => {
    const dispatch = jest.fn();
    axios.mockResolvedValue({ products });
    await loadProducts()(dispatch);
    expect(dispatch).toHaveBeenCalledOnce();
  });
});

// describe('loadHeroesAxios', () => {
//   test('should dispatch LOAD_HEROES', async () => {
//     axios.mockResolvedValue({ data: ['Skylab mola moltisim'] });
//     const dispatch = jest.fn();
//     // act
//     await loadHeroesAxios()(dispatch);

//     expect(dispatch).toHaveBeenCalledWith({
//       type: actionTypes.LOAD_HEROES,
//       heroes: ['Skylab mola moltisim'],
//     });
//   });
