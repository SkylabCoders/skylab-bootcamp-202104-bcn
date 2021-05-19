import axios from 'axios';

export const baseURL = 'https://localhost:6080';

export default axios.create({
  baseURL
});
