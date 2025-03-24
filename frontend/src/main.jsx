import React from "react";
import App from "./App";
import "./index.css";
import { createRoot } from "react-dom/client";
import "./index.css";
import { BusStopProvider } from "./context/BusStopContext";

createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BusStopProvider>
      <App />
    </BusStopProvider>
  </React.StrictMode>
);
