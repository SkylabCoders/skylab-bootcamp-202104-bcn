/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import {
  BrowserRouter as Router
} from 'react-router-dom';
import { render } from '../TestUtils';
import ChooseStarship from '../../Components/ChooseStarship';

describe('Given a ChooseStarship component', () => {
  test('Should print a choose starship section', () => {
    const { container } = render(
      <Router>
        <ChooseStarship />
      </Router>,
      {
        initialState: {
          auth: {
            isLoggedIn: false,
            user: {
              email: 'admin@admin.com'
            }

          }
        }
      }
    );
    const chooseTitle = container.querySelector('.starships__title');
    expect(chooseTitle.textContent).toBe('Choose a starhsip');
  });
});
