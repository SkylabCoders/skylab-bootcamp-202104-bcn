import axios from 'axios';

const movieDB = axios.create({
  baseURL: 'https://api.themoviedb.org/3/movie',
  params: {
    api_key: '2cd571faf863b38d611ebf6905a846a1',
    language: 'es-ES',
  },
});

export default movieDB;
