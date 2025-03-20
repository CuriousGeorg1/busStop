import { Router } from "express";
import { getBusStops } from "../services/busService.js";

const busController = Router();

busController.get("/busStations", async (req, res) => {
  const busStations = await getBusStops();
  res.json(busStations);
});

export default busController;
