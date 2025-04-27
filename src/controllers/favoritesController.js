import { Router } from "express";
import { updateFavorites, getFavorites } from "../services/favoritesService.js";

const favoritesController = Router();

// Controller for updating favorite bus stops
favoritesController.put("/", async (req, res) => {
  const { favorites } = req.body;
  const message = await updateFavorites({ favorites });
  res.json(message);
});

// Controller for getting favorite bus stops
favoritesController.get("/", async (req, res) => {
  try {
    const favorites = await getFavorites();
    res.status(200).json(favorites);
  } catch (error) {
    console.error("Error fetching favorites:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});

export default favoritesController;
