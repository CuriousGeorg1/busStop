import axios from "axios";
import dotenv from "dotenv";

dotenv.config();

const busApi = process.env.API_URI;

export async function getBusStops() {
  const response = await axios.get(busApi);
  return response.data;
}
