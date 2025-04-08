import { createContext, useContext, useState, useEffect } from "react";
import busServices from "../services/api"; // Ensure this is your API service

/**
 * Context to manage the state of bus stops and favorite stops.
 * Created to manafe state between different pages and components. Ensures that
 * that all pages share the same state, meaning that if a bus stop is added to
 * favorites on one page, it will be reflected on another (e.g. adding from bus stops to the favorites page).
 *
 * @typedef {Object} BusStopContext
 * @property {BusStop[]} busStops - The list of bus stops
 * @property {string[]} favoriteStops - The list of favorite bus stops
 * @property {function} toggleFavorite - Function to add/remove a favorite stop
 */

// Create context (global state) for bus stops
const BusStopContext = createContext();

// Custom hook to use the context in components
export const useBusStops = () => useContext(BusStopContext);

// Provider component to wrap the app and provide the context
export const BusStopProvider = ({ children }) => {
  const [busStops, setBusStops] = useState([]);
  const [favoriteStops, setFavoriteStops] = useState([]);

  // Fetch bus stops when the app loads
  useEffect(() => {
    const fetchData = async () => {
      try {
        const stops = await busServices.getBusStops();
        setBusStops(stops);
      } catch (error) {
        console.error("Error fetching bus stops:", error);
      }
    };
    fetchData();
  }, []);

  // Function to add/remove a favorite stop
  const toggleFavorite = (stopId) => {
    setFavoriteStops((prevFavorites) => {
      const stop = busStops.find((s) => s.id === stopId);
      if (!stop) return prevFavorites;

      const isFavorite = prevFavorites.some((fav) => fav.id === stopId);
      if (isFavorite) {
        return prevFavorites.filter((fav) => fav.id !== stopId);
      } else {
        return [...prevFavorites, stop];
      }
    });
  };

  return (
    <BusStopContext.Provider
      value={{ busStops, favoriteStops, toggleFavorite }}
    >
      {children}
    </BusStopContext.Provider>
  );
};
