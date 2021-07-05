import actionTypes from '../../redux/Actions/actionTypes';
import {
  login, logout, addUser, changeFaction, createTravel, deleteWish,
  loadLocalCharacters, loadLocalPlanets, loadLocalStarships,
  modifyUserName, modifyWish, resetProfile, selectAvatar,
  setCurrentPlanet, setCurrentStarship, showPrice
} from '../../redux/Actions/actionCreator';

describe('ActionCreator', () => {
  test('adduser should return an action with an actionType ADD_USER and a data', () => {
    const data = [];
    const result = addUser(data);
    expect(result).toEqual({
      type: actionTypes.ADD_USER,
      payload: data
    });
  });
  test('login should return an action with an actionType AUTH_LOGIN', () => {
    const result = login();
    expect(result).toEqual({
      type: actionTypes.AUTH_LOGIN
    });
  });
  test('login should return an action with an actionType AUTH_LOGOUT', () => {
    const result = logout();
    expect(result).toEqual({
      type: actionTypes.AUTH_LOGOUT
    });
  });
  test('changeFaction should return an action with an actionType CHANGE_FACTION and a data', () => {
    const data = [];
    const result = changeFaction(data);
    expect(result).toEqual({
      type: actionTypes.CHANGE_FACTION,
      payload: data
    });
  });
  test('createTravel should return an action with an actionType CREATE_TRAVEL and a data', () => {
    const data = [];
    const result = createTravel(data);
    expect(result).toEqual({
      type: actionTypes.CREATE_TRAVEL,
      payload: data
    });
  });
  test('deleteWish should return an action with an actionType DELETE_WISH and a data', () => {
    const wishId = 0;
    const result = deleteWish(wishId);
    expect(result).toEqual({
      type: actionTypes.DELETE_WISH,
      payload: wishId
    });
  });
  test('loadLocalCharacters should return an action with an actionType LOAD_LOCAL_CHARACTERS and a data', () => {
    const result = loadLocalCharacters();
    expect(result).toEqual({
      type: actionTypes.LOAD_LOCAL_CHARACTERS
    });
  });
  test('loadLocalPlanets should return an action with an actionType LOAD_LOCAL_PLANETS and a data', () => {
    const result = loadLocalPlanets();
    expect(result).toEqual({
      type: actionTypes.LOAD_LOCAL_PLANETS
    });
  });
  test('loadLocalStarships should return an action with an actionType LOAD_LOCAL_STARSHIPS and a data', () => {
    const result = loadLocalStarships();
    expect(result).toEqual({
      type: actionTypes.LOAD_LOCAL_STARSHIPS
    });
  });
  test('modifyUserName should return an action with an actionType MODIFY_USERNAME and a data', () => {
    const newUsername = '';
    const result = modifyUserName(newUsername);
    expect(result).toEqual({
      type: actionTypes.MODIFY_USERNAME,
      payload: newUsername
    });
  });
  test('modifyWish should return an action with an actionType MODIFY_WISH and a data', () => {
    const newWish = [];
    const result = modifyWish(newWish);
    expect(result).toEqual({
      type: actionTypes.MODIFY_WISH,
      payload: newWish
    });
  });
  test('resetProfile should return an action with an actionType RESET_PROFILE and a data', () => {
    const result = resetProfile();
    expect(result).toEqual({
      type: actionTypes.RESET_PROFILE
    });
  });
  test('selectAvatar should return an action with an actionType SELECT_AVATAR and a data', () => {
    const data = [];
    const result = selectAvatar(data);
    expect(result).toEqual({
      type: actionTypes.SELECT_AVATAR,
      payload: data
    });
  });
  test('setCurrentPlanet should return an action with an actionType SET_CURRENT_PLANET and a data', () => {
    const planet = [];
    const result = setCurrentPlanet(planet);
    expect(result).toEqual({
      type: actionTypes.SET_CURRENT_PLANET,
      payload: planet
    });
  });
  test('setCurrentStarship should return an action with an actionType SET_CURRENT_STARSHIP and a data', () => {
    const starship = '';
    const result = setCurrentStarship(starship);
    expect(result).toEqual({
      type: actionTypes.SET_CURRENT_STARSHIP,
      payload: starship
    });
  });
  test('showPrice should return an action with an actionType SHOW_PRICE and a data', () => {
    const data = [];
    const result = showPrice(data);
    expect(result).toEqual({
      type: actionTypes.SHOW_PRICE,
      payload: data
    });
  });
});
