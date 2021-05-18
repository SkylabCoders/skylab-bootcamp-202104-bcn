// import React from 'react';
// import { render, screen } from '../../common/test/index';
import { getMovieById, getCastMovie, loadRecomended } from '../../application/store/actions/actionsCreator';

describe('Given a function getMovieById', () => {
  describe('When invoked', () => {
    test('Should dispatch LOAD_MOVIE', async () => {
      const dispatch = jest.fn();
      await getMovieById('460465')(dispatch);
      expect(dispatch).toHaveBeenCalled();
    });
  });
});

describe('Given a function getCastMovie', () => {
  describe('When invoked', () => {
    test('Should dispatch LOAD_CAST', async () => {
      const dispatch = jest.fn();
      await getCastMovie('460465')(dispatch);
      expect(dispatch).toHaveBeenCalled();
    });
  });
});

describe('Given a function loadRecomended', () => {
  describe('When invoked', () => {
    test('Should dispatch LOAD_RECOMENDED', async () => {
      const dispatch = jest.fn();
      await loadRecomended('460465')(dispatch);
      expect(dispatch).toHaveBeenCalled();
    });
  });
});
