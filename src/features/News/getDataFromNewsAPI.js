import axios from "axios";

const BASE_URL = "https://newsapi.org/v2";
const API_KEY = "dd008e88cbfc475293656969c938e744";

// poniższy kod powoduje błąd 401, na ten moment musi chwilę poczekac na rozwiązanie

/*   const getApi = async (path, params) => {
     const response = await axios.get(`${BASE_URL}${path}`, {
         params: {                
             ...params,
             api_key: API_KEY,
         },
     });

     if (!response.ok) {
         throw new Error(response.statusText);
     }

     return response.data;
 }

 export const searchNews = ({countryCode})=> getApi('/top-headlines/',{ "country": countryCode } );  */

export const searchNews = async ({ countryCode }) => {
    const response = await axios.get(`${BASE_URL}/top-headlines?country=${countryCode}&apiKey=${API_KEY}`);

    if (!response.ok) {
        new Error(response.statusText);
    }

    return await response.data;
};  