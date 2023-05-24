import axios from 'axios';

const BASE_URL = 'https://newsapi.org/v2';
const API_KEY = 'dd008e88cbfc475293656969c938e744';

const getApi = async (path, params) => {
  const response = await axios.get(`${BASE_URL}${path}`, {
    params: {
      apiKey: API_KEY,
      ...params,
    },
  });

  if (!response.ok) {
    new Error(response.statusText);
  }

  return await response.data;
};

export const searchNews = ({ countryCode }) => getApi('/top-headlines', { country: countryCode });

/* export const searchNews = async ({ countryCode }) => {
    const params = new URLSearchParams({
        apiKey: API_KEY,
        country: countryCode,
    });

    const response = await axios.get(`${BASE_URL}/top-headlines?${params}`);

    console.log(response);
    if (!response.ok) {
        new Error(response.statusText);
    }

    return await response.data;
}; */
