import http, { API_KEY } from '../http';

export const TYPE_PARAMS = {
  latest: 'latest',
  now_playing: 'now_playing',
  popular: 'popular',
  topRated: 'top_rated',
  upcoming: 'upcoming'
};

export const getFilms = (entryPoint) => http.get(`${entryPoint}?api_key=${API_KEY}&language=en-US&page=1`);
export const getGenres = (entryPoint) => http.get(`${entryPoint}?api_key=${API_KEY}&language=en-US&page=1`);
export const getCast = (entryPoint) => http.get(`${entryPoint}/credits?api_key=${API_KEY}&language=en-US&page=1`);
export const getShows = (entryPoint) => http.get(`${entryPoint}/3/tv/on_the_air?api_key=${API_KEY}&language=en-US&page=1`);
