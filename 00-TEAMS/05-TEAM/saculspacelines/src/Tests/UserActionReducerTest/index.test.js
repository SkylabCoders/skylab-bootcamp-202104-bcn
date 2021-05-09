import actionTypes from '../../redux/Actions/actionTypes';
import userActionReducer from '../../redux/Reducers/userActionReducer';

const {
  ADD_USER,
  CHANGE_FACTION
//   CREATE_TRAVEL,
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
    const state = { currentUser: { 0: { email: 'admin@admin.com', faction: 'DARK' } } };
    const action = {
      type: CHANGE_FACTION,
      payload: [{ email: 'admin@admin.com', faction: 'LIGHT' }]
    };

    const result = { currentUser: { 0: { email: 'admin@admin.com', faction: 'LIGHT' } } };

    expect(result).toEqual(userActionReducer(state, action));
  });
});
