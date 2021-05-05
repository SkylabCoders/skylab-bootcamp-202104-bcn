/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import GameMode from './index';
import { render, screen } from '../../test-util';

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
