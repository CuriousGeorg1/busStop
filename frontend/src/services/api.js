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
  const request = await axios.get(`${baseURL}/api/${id}`);
  return request.data;
};

export default { getBusStops, getBusStop };
