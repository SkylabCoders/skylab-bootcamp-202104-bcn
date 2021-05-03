import axios from 'axios';
import actionTypes from './actionTypes';

const URL = 'https://api.themoviedb.org/3/movie/popular?api_key=676fcc92f08e6b8bd969d6b857cce0c4&language=en-US&page=1';

function loadMovies(url = URL) {
  return async (dispatch) => {
    const response = await axios.get(url);
    dispatch({
      type: actionTypes.LOAD_MOVIES,
      movies: response.data.results
    });
  };
}

export default loadMovies;
