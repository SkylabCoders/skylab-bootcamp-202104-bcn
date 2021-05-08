import http, { API_KEY } from '../http';

export const TYPE_PARAMS = {
  latest: 'latest',
  now_playing: 'now_playing',
  popular: 'popular',
  on_the_air: 'on_the_air',
  topRated: 'top_rated',
  upcoming: 'upcoming'
};

export const getFilms = (entryPoint) => http.get(`/movie/${entryPoint}?api_key=${API_KEY}&language=en-US&page=1`);
export const getGenres = (entryPoint) => http.get(`/movie/${entryPoint}?api_key=${API_KEY}&language=en-US&page=1`);
export const getCast = (entryPoint) => http.get(`/movie/${entryPoint}/credits?api_key=${API_KEY}&language=en-US&page=1`);
export const getRecommended = (entryPoint) => http.get(`/movie/${entryPoint}/recommendations?api_key=${API_KEY}&language=en-US&page=1`);
export const getShows = (entryPoint) => http.get(`/tv/${entryPoint}?api_key=${API_KEY}`);
export const getGrid = (entryPoint) => http.get(`/movie/${entryPoint}?api_key=${API_KEY}`);
export const getShowsPopular = (entryPoint) => http.get(`/tv/${entryPoint}?api_key=${API_KEY}`);
