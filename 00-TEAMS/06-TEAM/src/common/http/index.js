import axios from 'axios';

export const baseURL = 'https://api.themoviedb.org/3';
export const API_KEY = '676fcc92f08e6b8bd969d6b857cce0c4';

export default axios.create({
  baseURL
});
