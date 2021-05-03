import { TOKEN, API_PRODUCTS_URL } from '../data/endpoints';

const getProductsFromApi = async (token = TOKEN, apiProductsUrl = API_PRODUCTS_URL) => {
  try {
    const options = {
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
        Authorization: `Bearer ${token}`
      }
    };

    const response = await fetch(`${apiProductsUrl}sdssd`, options);
    return { data: await response.json() };
  } catch ({ message }) {
    return { error: message };
  }
};

export default { getProductsFromApi };
