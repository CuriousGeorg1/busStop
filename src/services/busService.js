/*
  For this file to work properly create a .env file in the root of the project
  and add the following line to it:
  API_URI=https://data.foli.fi/siri/sm
*/

import axios from "axios";
import dotenv from "dotenv";

dotenv.config();

const busApi = process.env.API_URI;

// This function will sanitize the data from the API and return
// only the necessary data.
const sanitizeStopData = ({ data }) => {
  if (!data || !data.result) {
    return JSON.stringify({ error: "Bus stop not found", status: 404 });
  }
  // Choose the data you want to return
  return data.result.map((entry) => ({
    lineref: entry.lineref,
    destination: entry.destinationdisplay,
    departure: new Date(
      entry.originaimeddeparturetime * 1000
    ).toLocaleTimeString(),
    arrival: new Date(
      entry.destinationaimedarrivaltime * 1000
    ).toLocaleTimeString(),
  }));
};
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
  // fetch the data from foli API
  const response = await axios.get(`${busApi}/pretty`);
  return response.data;
}

/*
  This function will fetch a single bus stop from the API,
  sanitize the data and return it.
*/
export async function getBusStop(stopId) {
  try {
    // fetch the data from foli API
    const response = await axios.get(`${busApi}/${stopId}/pretty`);
    // sanitize the data
    const sanitizedStopData = sanitizeStopData(response);
    return sanitizedStopData;
  } catch (error) {
    console.error(error);
    return JSON.stringify({ error: "Bus stop not found", status: 404 });
  }
}
