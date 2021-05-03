/* eslint-disable no-console */
import axios from 'axios';
import actionTypes from './actionTypes';

export default function loadGame(difficultySelection, typeSelection) {
  const url = `https://opentdb.com/api.php?amount=10&difficulty=${difficultySelection}&type=${typeSelection}`;
  console.log(url);
  return async (dispatch) => {
    const { data } = await axios.get(url);
    console.log(data);
    dispatch({
      type: actionTypes.LOAD_GAME,
      game: data.results
    });
  };
}
