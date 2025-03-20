import axios from "axios";
import dotenv from "dotenv";

dotenv.config();

const busApi = process.env.API_URI;

/*
  This function will fetch the bus stops from the API
  and return the data.

  format:
  {
  "1": {
    "stop_name": "Turun satama (Silja)"
  }
}
*/
export async function getBusStops() {
  const response = await axios.get(`${busApi}/sm/pretty`);
  return response.data;
}

export async function getBusStop(stopId) {
  try {
    var url = `${busApi}/sm/${stopId}/pretty`;
    console.log(`${busApi}/sm/${stopId}/pretty`);
    const response = await axios.get(url);
    return response.data;
  } catch (error) {
    console.error(error);
    return JSON.stringify({ error: "Bus stop not found", status: 404 });
  }
}
