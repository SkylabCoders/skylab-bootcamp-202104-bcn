import actionTypes from '../../redux/Actions/actionTypes';
import userActionReducer from '../../redux/Reducers/userActionReducer';

const {
  ADD_USER,
  CHANGE_FACTION,
  CREATE_TRAVEL
//   DELETE_WISH,
//   LOAD_WISHLIST,
//   MODIFY_USERNAME,
//   MODIFY_WISH,
//   RESET_PROFILE,
//   SELECT_AVATAR,
//   SET_CURRENT_PLANET
} = actionTypes;

describe('Given an User action reducer function and an ADD user payload', () => {
  test('Should change selected user to selected faction', () => {
    const state = { currentUser: { email: 'admin@admin', faction: 'LIGHT' } };
    const action = {
      type: ADD_USER,
      payload: [{ email: 'admin@admin.com', faction: 'DARK' }]
    };

    const result = { currentUser: { 0: { email: 'admin@admin.com', faction: 'DARK' } } };

    expect(result).toEqual(userActionReducer(state, action));
  });
});

describe('Given an User action reducer function and a change faction payload', () => {
  test('Should change selected user to selected faction', () => {
    const state = { currentUser: { email: 'admin@admin.com', faction: 'DARK' } };
    const action = {
      type: CHANGE_FACTION,
      payload: { email: 'admin@admin.com', faction: 'LIGHT' }
    };

    const result = {
      currentUser: {
        avatar: 'https://staticdelivery.nexusmods.com/mods/2229/images/thumbnails/5267/5267-1612801430-1758384712.png',
        email: 'admin@admin.com',
        faction: 'LIGHT',
        username: 'admin',
        wishlist: [
          {
            id: 0,
            planet: 'Naboo',
            price: 0,
            starship: 'Death Star'
          },
          {
            id: 1,
            planet: 'Blabla',
            price: 100,
            starship: 'Tie'
          },
          {
            id: 2,
            planet: 'Namekuzen',
            price: 100,
            starship: 'capsule'
          }
        ]
      }
    };

    expect(result).toEqual(userActionReducer(state, action));
  });
});

describe('Given an User action reducer function and a create travel payload', () => {
  test('Should add payloaded travel to wishilist of the current user', () => {
    const state = { currentUser: { 0: { email: 'admin@admin.com', faction: 'DARK', wishlist: [] } } };
    const action = {
      type: CREATE_TRAVEL,
      payload: [{ planet: 'Naboo' }]
    };

    const result = { currentUser: { 0: { email: 'admin@admin.com', faction: 'DARK', wishlist: [{ planet: 'Naboo' }] } } };

    expect(result).toEqual(userActionReducer(state, action));
  });
});
