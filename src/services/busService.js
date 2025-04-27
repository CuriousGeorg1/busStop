/*
  For this file to work properly create a .env file in the root of the project
  and add the following line to it:
  API_URI=https://data.foli.fi/siri/sm
*/

import axios from "axios";
import dotenv from "dotenv";

dotenv.config();

const busApi = process.env.API_URI;

// This function will sanitize the data from foli API and return
// only the necessary data. Used for a single bus stop.
const sanitizeStopData = ({ data }) => {
  if (!data || !data.result) {
    return JSON.stringify({ error: "Bus stop not found", status: 404 });
  }
  // Defines the data we want to return
  return data.result.map((entry) => ({
    lineref: entry.lineref,
    destination: entry.destinationdisplay,
    departure: new Date(
      entry.originaimeddeparturetime * 1000
    ).toLocaleTimeString(),
    arrival: new Date(
      entry.destinationaimedarrivaltime * 1000
    ).toLocaleTimeString(),
    destination: entry.destinationdisplay,
  }));
};

// This function will transform the data from foli API
// to a more readable format. Used for multiple bus stops.
const transformStops = (stops) => {
  return Object.entries(stops).map(([id, stop]) => ({
    id: id,
    name: stop.stop_name,
  }));
};

/*
  This function will fetch the bus stops from the API,
  transform the data and return it to controller.
*/
export async function getBusStops() {
  try {
    const response = await axios.get(`${busApi}/pretty`);
    return transformStops(response.data);
  } catch (error) {
    console.error("Error fetching bus stops:", error);
    return [];
  }
}

/*
  This function will fetch a single bus stop from the API,
  sanitize the data and return it to controller.
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
