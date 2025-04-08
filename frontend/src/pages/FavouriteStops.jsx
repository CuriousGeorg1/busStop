import React from "react";
import { useBusStops } from "../context/BusStopContext";
import Header from "../components/Header";
import DataList from "../components/DataList";

/**
 * Favourite stops page component.
 *
 * TODO: build a page that displays all favourite stops.
 * Should have functionality to remove a stop from the list.
 * Remember: favourite stops can be stored in runtime memory or in local storage.
 * Again: feel free to add other functionality as you see fit.
 * @returns {JSX.Element} FavouriteStops page
 */
const FavouriteStops = () => {
  const { favoriteStops, toggleFavorite } = useBusStops();

  return (
    <>
      <Header />
      <div>
        <p>FavouriteStops</p>
      </div>
      <div>
        <DataList
          stops={favoriteStops}
          toggle={toggleFavorite}
          displayFavorites={true} // display only favourites
        />
      </div>
    </>
  );
};

export default FavouriteStops;
