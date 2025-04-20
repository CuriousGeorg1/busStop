import React from "react";
import DataList from "../components/DataList";
import { useBusStops } from "../context/BusStopContext";
import Header from "../components/Header";
import "./BusStops.css";

/**
 * BusStops page component.
 * TODO: build a page that displays all bus stops. Should have functionality to
 * narrow the search down by bus stop name.
 * Feel free to add other functionality as you see fit.
 *
 * @returns {JSX.Element} BusStops page
 */

const BusStops = () => {
  const { busStops, favoriteStops, toggleFavorite } = useBusStops();

  return (
    <>
      <Header />
      <div>
        <p>Bus Stops</p>
      </div>
      <div className="datalist">
        <DataList
          stops={busStops}
          toggle={toggleFavorite}
          displayFavorites={false} // Display all bus stops
        />
      </div>
    </>
  );
};

export default BusStops;
