import axios from 'axios';

const baseURL = 'http://localhost:2024/tasks';

export default axios.create({
  baseURL
});
