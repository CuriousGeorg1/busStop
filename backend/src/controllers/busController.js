import { Router } from "express";
import { getBusStops, getBusStop } from "../services/busService.js";

const busController = Router();

// Controller for handling rewuests for bus stations
busController.get("/busStops", async (req, res) => {
  const busStations = await getBusStops();
  if (busStations) {
    res.status(200).json(busStations);
  } else {
    res.status(404).json({ error: "Bus stations were not found" });
  }
});

// Controller for handling requests for a single bus station
busController.get("/busStops/:id", async (req, res) => {
  const { id } = req.params;
  const busStation = await getBusStop(id);
  res.json(busStation);
});

export default busController;
