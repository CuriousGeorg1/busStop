import React from "react";
import "./BusStopData.css";

export default function BusStopData({ data }) {
  return (
    <div className="bus-container">
      <h2 className="bus-title">Bus Stop Schedule</h2>
      <table className="bus-table">
        <thead>
          <tr className="bus-header">
            <th className="bus-cell">Line</th>
            <th className="bus-cell">Destination</th>
            <th className="bus-cell">Departure</th>
            <th className="bus-cell">Arrival</th>
          </tr>
        </thead>
        <tbody>
          {data.map((bus, index) => (
            <tr key={index} className="bus-row">
              <td className="bus-cell">{bus.lineref}</td>
              <td className="bus-cell">{bus.destination}</td>
              <td className="bus-cell">{bus.departure}</td>
              <td className="bus-cell">{`${bus.arrival} at ${bus.destination}`}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
