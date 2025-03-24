import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import BusStops from "../pages/BusStops";
import FavouriteStops from "../pages/FavouriteStops";
import NotFound from "../pages/NotFound";
import BusStop from "../pages/BusStop";

/**
 * AppRoutes component
 *
 * This component is responsible for defining and gathering all the routes of the application in one place.
 * It uses React Router to manage the navigation between different pages of the application.
 * By centralizing the routes here, it becomes easier to manage and update the navigation structure.
 *
 * @returns {JSX.Element} The Router component with defined routes.
 */

const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/bus-stops" element={<BusStops />} />
        <Route path="bus-stops/:id" element={<BusStop />} />
        <Route path="/favourite-stops" element={<FavouriteStops />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
};

export default AppRoutes;
