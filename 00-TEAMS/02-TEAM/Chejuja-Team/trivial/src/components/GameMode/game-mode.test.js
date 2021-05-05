/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import { screen } from 'redux';
import GameMode from './index';
import { render } from '../../../test-util.test';

describe('GameMode Component', () => {
  test('should contain input', () => {
    render(<GameMode />, {
      initialState: {
      }
    });

    expect(screen.getByText(/EASY/i)).toBeInTheDocument();
  });
});
//   test('should contain stranger', () => {
//     render(<GameMode />, {
//       initialState: {
//         auth: {
//           isLoggedIn: false
//         }
//       }
//     });

//     expect(screen.getByText(/stranger/i)).toBeInTheDocument();
//   });
// });
