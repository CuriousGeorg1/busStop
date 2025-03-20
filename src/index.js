import express from "express";
import morgan from "morgan";
import busController from "./controllers/busController.js";

const app = express();
const port = 3001;

app.use(morgan("tiny"));
app.use(express.json());
app.use("/api", busController);

app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`);
});
