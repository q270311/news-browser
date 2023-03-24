import axios from "axios";

const baseURL = "https://newsapi.org/v2";
const apiKey = "dd008e88cbfc475293656969c938e744";

export const searchNews = async ({ countryCode }) => {
    const response = await axios.get(`${baseURL}/top-headlines?country=${countryCode}&language=en&apiKey=${apiKey}`);

    if (!response.ok) {
        new Error(response.statusText);
    }

    return await response.data;
};