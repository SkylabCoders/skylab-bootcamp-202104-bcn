/* eslint-disable react/jsx-filename-extension */
// import React from 'react';
// import { Provider } from 'react-redux';
// import { render } from '../TestUtils';
// import Login from '../../Components/Login';
// import configureStore from '../../redux/store/configureStore';

// describe('Given a Login component', () => {
//   test('Should print Login section with a loggedOutTemplate when loged out', () => {
//     const { container } = render(
//       <Provider store={configureStore()}>
//         <Login />
//       </Provider>, {
//         initialState: {
//           auth: {
//             isLoggedIn: false
//           }
//         }
//       }
//     );

//     const loginLogOutTitle = container.querySelector('.auth__title');
//     expect(loginLogOutTitle.textContent).toBe('Sacul spacelines');
//   });
// });

// describe('Given a Login component', () => {
//   test('Should print Choose faction section when loged in', () => {
//     const { container } = render(<Login />, {
//       initialState: {
//         auth: {
//           isLoggedIn: true
//         }
//       }
//     });
//     const loginLogInTitle = container.querySelector('.logout-button');
//     expect(loginLogInTitle.textContent).toBe('Log out');
//   });
// });
