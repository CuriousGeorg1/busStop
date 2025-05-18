import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import busServices from "../services/api";
import { useBusStops } from "../context/BusStopContext";
import Header from "../components/Header.jsx";
import BusStopData from "../components/BusStopData.jsx";

const BusStop = () => {
  const { id } = useParams();
  const [busStop, setBusStop] = useState(null);
  const [loading, setLoading] = useState(true);
  const { busStops } = useBusStops();

  useEffect(() => {
    const fetchBusStop = async () => {
      try {
        const stopData = await busServices.getBusStop(id);
        setBusStop(stopData);
        console.log("Bus stop data", stopData);
      } catch (error) {
        console.error("Error fetching data", error);
      } finally {
        setLoading(false);
      }
    };

    fetchBusStop();
  }, [id]);

  if (loading) return <p>Loading bus stop details...</p>;
  if (!busStop) return <p>Bus stop not found.</p>;

  const busStopName = busStops.find((stop) => stop.id === id)?.name;
  return (
    <>
      <div>
        <Header />
      </div>
      <div style={{ textAlign: "center", marginTop: "20px" }}>
        <h1>{busStopName}</h1>
      </div>
      <div>
        <BusStopData data={busStop} />
      </div>
    </>
  );
};

export default BusStop;
