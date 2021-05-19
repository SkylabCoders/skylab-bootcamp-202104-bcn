import http from './http';

export const getHeroes = () => {
  http.get('/heroes');
};
export const createHero = (heroData) => {
  http.post('/heroes', heroData);
};
export const getById = (id) => {
  http.get(`/heroes/${id}`);
};
