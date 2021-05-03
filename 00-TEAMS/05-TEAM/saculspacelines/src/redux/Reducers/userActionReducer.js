import actionTypes from '../Actions/actionTypes';
import USERS from '../store/userList';

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
  SET_CURRENT_PLANET
  //   SHOW_PRICE

} = actionTypes;

export default function userActionReducer(state = [], { type, payload }) {
  let currentPlanet = '';
  const currentUser = null;
  let result;

  switch (type) {
    case ADD_USER:
      result = { ...USERS, payload };
      break;

    case CHANGE_FACTION:
      result = USERS.filter((user) => user.id !== payload.id);
      result = { ...result, payload };
      break;

    case CREATE_TRAVEL:
      result = USERS.find((user) => user.id === currentUser);
      result.wishlist = [...result.wishlist, payload];
      result = { ...USERS, result };
      break;

    case DELETE_WISH:
      result = USERS.find((user) => user.id === currentUser);
      result.wishlist = result.wishlist.filter((wish) => wish.id !== payload);
      result = { ...USERS, result };
      break;

    case LOAD_WISHLIST:
      result = USERS.find((user) => user.id === currentUser);
      result = result.wishlist;
      break;

    case MODIFY_USERNAME:
      result = USERS.find((user) => user.id === currentUser);
      result.username = payload;
      result = { ...USERS, result };
      break;

    case MODIFY_WISH:
      result = USERS.find((user) => user.id === currentUser);
      result.wishlist = result.wishlist.filter((wish) => wish.id !== payload.id);
      result.wishlist = { ...result.wishlist, payload };
      result = { ...USERS, result };
      break;

    case RESET_PROFILE:
      result = USERS.filter((user) => user.id !== currentUser);
      break;

    case SELECT_AVATAR:
      result = USERS.find((user) => user.id === currentUser);
      result = { ...USERS, payload };
      break;

    case SET_CURRENT_PLANET:
      currentPlanet = payload;
      result = currentPlanet;
      break;

      // case SHOW_PRICE:
      //     result
      //     break;

    default:
      result = state;
  }
  return result;
}
