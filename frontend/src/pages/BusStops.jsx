import React from "react";
import DataGridDemo from "../components/DataList";

/**
 * BusStops page component.
 * TODO: build a page that displays all bus stops. Should have functionality to
 * narrow the search down by bus stop name.
 * Feel free to add other functionality as you see fit.
 *
 * @returns {JSX.Element} BusStops page
 */

const BusStops = () => {
  return (
    <>
      <div>
        <p>Bus Stops</p>
      </div>
      <div>
        <DataGridDemo />
      </div>
    </>
  );
};

export default BusStops;
