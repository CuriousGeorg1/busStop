import { Router } from "express";
import { getBusStops, getBusStop } from "../services/busService.js";

const busController = Router();

// Controller for handling rewuests for bus stations
busController.get("/busStations", async (req, res) => {
  const busStations = await getBusStops();
  if (busStations) {
    res.status(200).json(busStations);
  } else {
    res.status(404).json({ error: "Bus stations were not found" });
  }
});

// Controller for handling requests for a single bus station
busController.get("/busStations/:id", async (req, res) => {
  const { id } = req.params;
  const busStation = await getBusStop(id);
  res.json(busStation);
});

export default busController;
