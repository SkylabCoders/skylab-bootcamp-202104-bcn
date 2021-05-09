import actionTypes from '../Actions/actionTypes';
import USERS from '../store/userList/index';

const {
  ADD_USER,
  CHANGE_FACTION,
  CREATE_TRAVEL,
  DELETE_WISH,
  LOAD_WISHLIST,
  MODIFY_USERNAME,
  MODIFY_WISH,
  RESET_PROFILE,
  SELECT_AVATAR,
  SET_CURRENT_PLANET,
  SET_CURRENT_STARSHIP

} = actionTypes;

export default function userActionReducer(
  state = { currentUser: null, currentPlanet: null, currentStarship: null }, { type, payload }
) {
  let updateState = { ...state };
  let result = 0;

  switch (type) {
    case ADD_USER:
      USERS.push(payload);
      updateState = { ...updateState, currentUser: { ...payload } };
      result = { ...updateState };
      break;

    case CHANGE_FACTION:
      result = USERS.find((user) => user.email === payload.email);
      result.faction = payload.faction;
      result = { ...updateState, currentUser: { ...result } };
      break;

    case CREATE_TRAVEL:
      result = USERS.find((user) => user.email === state.currentUser.email);
      result.wishlist = [...result.wishlist, payload];
      result = { ...updateState, result };
      break;

    case DELETE_WISH:
      result = USERS.find((user) => user.username === state.currentUser);
      result.wishlist = result.wishlist.filter((wish) => wish.id !== payload);
      result = { ...USERS, result, updateState };
      break;

    case LOAD_WISHLIST:
      result = USERS.find((user) => user.email === state.currentUser);
      result = result.wishlist;
      break;

    case MODIFY_USERNAME:
      result = USERS.find((user) => user.username === state.currentUser);
      result.username = payload;
      result = { ...USERS, result };
      break;

    case MODIFY_WISH:
      result = USERS.find((user) => user.username === state.currentUser);
      result.wishlist = result.wishlist.filter((wish) => wish.id !== payload.id);
      result.wishlist = { ...result.wishlist, payload };
      result = { ...USERS, result };
      break;

    case RESET_PROFILE:
      result = USERS.filter((user) => user.username !== state.currentUser);
      break;

    case SELECT_AVATAR:
      result = USERS.find((user) => user.email === state.currentUser);
      updateState.currentUser = payload.username;
      result = { ...USERS, payload };
      break;

    case SET_CURRENT_PLANET:
      updateState = { ...updateState, currentPlanet: { ...payload } };
      result = { ...updateState };
      break;

    case SET_CURRENT_STARSHIP:
      updateState.currentStarship = { ...payload };
      result = { ...updateState };
      break;

      // case SHOW_PRICE:
      //     result
      //     break;

    default:
      result = state;
  }
  return result;
}
