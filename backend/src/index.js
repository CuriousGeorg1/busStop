import express from "express";
import morgan from "morgan";
import busController from "./controllers/busController.js";
import favoritesController from "./controllers/favoritesController.js";
import cors from "cors";

const app = express();
const port = 3001;

app.use(cors());
app.use(morgan("tiny"));
app.use(express.json());
app.use("/api", busController);
app.use("/favorites", favoritesController);

app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`);
});
