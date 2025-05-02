import { useState } from "react";
import Box from "@mui/material/Box";
import { DataGrid } from "@mui/x-data-grid";
import { useBusStops } from "../context/BusStopContext";
import Checkbox from "@mui/material/Checkbox";
import { Link } from "react-router-dom";

/**
 * DataList component displays a list of bus stops in a data grid format.
 * It allows users to add or remove bus stops from their favorites.
 * The same component is used for both displaying all bus stops and favorite bus stops.
 * @param {Array} stops - Array of bus stops to display.
 * @param {Function} toggle - Function to toggle the display of favorites.
 * @param {boolean} displayFavorites - Flag to indicate if favorites should be displayed.
 * @returns {JSX.Element} - Rendered DataList component.
 */
export default function DataList({ stops, displayFavorites }) {
  const { favoriteStops, toggleFavorite } = useBusStops();
  const [filterModel, setFilterModel] = useState({
    items: [],
  });

  // Function to handle checkbox change aka adding to and removing from favorites
  const handleCheckboxChange = (id) => {
    toggleFavorite(id);
  };

  /**
   * Configuring colutmns for the DataGrid.
   * Defines the behavior of each column.
   * The first column is a checkbox for adding/removing favorites.
   * The second column displays the bus stop name as a link.
   */
  const columns = [
    {
      field: "favourite",
      headerName: displayFavorites
        ? "Remove from Favorites"
        : "Add to Favorites",
      width: 150,
      renderCell: (params) => (
        <Checkbox
          checked={params.value}
          onChange={() => handleCheckboxChange(params.row.id)}
          color="primary"
          sx={{
            "&.Mui-checked": {
              color: "#1976d2",
            },
          }}
        />
      ),
    },
    {
      field: "busStopName",
      headerName: "Bus Stop Name",
      width: 400,
      renderCell: (params) => (
        <Link
          to={`/bus-stops/${params.row.id}`}
          style={{ textDecoration: "none", color: "#1976d2" }}
        >
          {params.value}
        </Link>
      ),
    },
  ];

  /**
   * Filter stops based on displayFavorites
   * If displayFavorites is true -> show only favorite stops (used on favoritestops page).
   * If false -> show all stops (used in bus stops page).
   */
  const data = displayFavorites
    ? favoriteStops?.map((stop) => ({
        id: stop.id,
        favourite: true,
        busStopName: stop.name,
      })) || []
    : stops.map((stop) => ({
        id: stop.id,
        favourite: favoriteStops.some((favStop) => favStop.id === stop.id),
        busStopName: stop.name,
      }));

  return (
    <Box
      sx={{ height: 400, width: "100%", maxWidth: "800px", margin: "0 auto" }}
    >
      <DataGrid
        rows={data}
        columns={columns}
        filterModel={filterModel}
        onFilterModelChange={(newFilterModel) => setFilterModel(newFilterModel)}
        initialState={{
          pagination: {
            paginationModel: {
              pageSize: 15,
            },
          },
        }}
        pageSizeOptions={[5, 10, 15]}
        disableRowSelectionOnClick
        sx={{
          "& .MuiDataGrid-cell:focus": {
            outline: "none",
          },
          "& .MuiDataGrid-columnHeader:focus": {
            outline: "none",
          },
        }}
      />
    </Box>
  );
}
