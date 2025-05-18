import axios from "axios";

const baseURL = import.meta.env.VITE_API_URL;

const getBusStops = async () => {
  try {
    const request = await axios.get(`${baseURL}/api/busStops/`);
    return request.data;
  } catch (error) {
    console.error("API request failed:", error);
    return [];
  }
};

const getBusStop = async (id) => {
  const request = await axios.get(`${baseURL}/api/busStops/${id}`);
  return request.data;
};

const updateFavoriteStops = async (favorites) => {
  try {
    const request = await axios.put(`${baseURL}/favorites`, {
      favorites,
    });
    return request.data;
  } catch (error) {
    console.error("API request failed:", error);
    return [];
  }
};

const getFavoriteStops = async () => {
  try {
    const request = await axios.get(`${baseURL}/favorites`);
    return request.data;
  } catch (error) {
    console.error("API request failed:", error);
    return [];
  }
};

export default {
  getBusStops,
  getBusStop,
  updateFavoriteStops,
  getFavoriteStops,
};
