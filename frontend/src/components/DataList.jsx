import { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import { DataGrid } from "@mui/x-data-grid";
import { useBusStops } from "../context/BusStopContext";
import Checkbox from "@mui/material/Checkbox";
import { Link } from "react-router-dom";

export default function DataGridDemo({ stops, favorites, toggle }) {
  const { busStops, favoriteStops, toggleFavorite } = useBusStops();
  const [filterModel, setFilterModel] = useState({
    items: [],
  });

  const handleCheckboxChange = (id) => {
    toggle(id);
  };

  const columns = [
    {
      field: "favourite",
      headerName: "Favourite",
      width: 90,
      renderCell: (params) => (
        <Checkbox
          checked={params.value}
          onChange={() => handleCheckboxChange(params.row.id)}
        />
      ),
    },
    {
      field: "bustStopName",
      headerName: "Bus stop",
      width: 150,
      renderCell: (params) => (
        <Link to={`/bus-stops/${params.row.id}`}>{params.value}</Link>
      ),
    },
  ];

  const data = stops.map((stop) => ({
    id: stop.id,
    favourite: favorites.includes(stop.id),
    bustStopName: stop.name,
  }));

  const rows = data;

  return (
    <Box sx={{ height: 400, width: "50vw" }}>
      <DataGrid
        rows={rows}
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
      />
    </Box>
  );
}
