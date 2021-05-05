import http, { API_KEY } from '../http';

export const TYPE_PARAMS = {
  latest: 'latest',
  now_playing: 'now_playing',
  popular: 'popular',
  topRated: 'top_rated',
  upcoming: 'upcoming'
};

export const getFilms = (entryPoint) => http.get(`${entryPoint}?api_key=${API_KEY}&language=en-US&page=1`);
