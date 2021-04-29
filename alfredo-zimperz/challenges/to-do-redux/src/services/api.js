import credentials from '../config/credentials';

const GOOGLE_BOOKS_BASE_URL = 'https://www.googleapis.com/books/v1/';
const VOLUMES_URL = 'volumes?q=search-terms&key=';

function fetchBooks(
  urlParams = { baseURL: GOOGLE_BOOKS_BASE_URL, volumesURL: VOLUMES_URL },
  apiKey = credentials.API_KEY,
) {
  const url = urlParams.baseURL + urlParams.volumesURL + apiKey;
  return fetch(url)
    .then((response) => response.json());
}

export default { fetchBooks };
