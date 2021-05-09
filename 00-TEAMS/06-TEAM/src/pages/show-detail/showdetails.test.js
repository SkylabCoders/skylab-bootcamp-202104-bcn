// import React from 'react';
// import { render, screen } from '../../common/test/index';
import { getShowById, loadRecommendedShows } from '../../application/store/actions/actionsCreator';

describe('Given a function getShowById', () => {
  describe('When invoked', () => {
    test('Should dispatch LOAD_SHOW', async () => {
      const dispatch = jest.fn();
      await getShowById('79460')(dispatch);
      expect(dispatch).toHaveBeenCalled();
    });
  });
});

describe('Given a function loadRecommendedShows', () => {
  describe('When invoked', () => {
    test('Should dispatch LOAD_SHOWS_RECOMMENDED', async () => {
      const dispatch = jest.fn();
      await loadRecommendedShows('79460')(dispatch);
      expect(dispatch).toHaveBeenCalled();
    });
  });
});
