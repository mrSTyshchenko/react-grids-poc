import React from "react";
import { DataGrid } from "@mui/x-data-grid";
import { Paper, Button, LinearProgress } from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import CancelIcon from "@mui/icons-material/Cancel";
import PendingIcon from "@mui/icons-material/HourglassEmpty";

const columns = [
  { field: "id", headerName: "ID", width: 70 },
  { field: "name", headerName: "Name", width: 130 },
  { field: "email", headerName: "Email", width: 180 },
  {
    field: "progress",
    headerName: "Progress",
    width: 160,
    renderCell: (params) => (
      <LinearProgress variant="determinate" value={params.value} sx={{ width: "100%" }} />
    ),
  },
  {
    field: "status",
    headerName: "Status",
    width: 130,
    renderCell: (params) => {
      switch (params.value) {
        case "completed":
          return <CheckCircleIcon color="success" />;
        case "pending":
          return <PendingIcon color="warning" />;
        case "failed":
          return <CancelIcon color="error" />;
        default:
          return null;
      }
    },
  },

  {
    field: "action",
    headerName: "Action",
    width: 150,
    renderCell: () => <Button variant="contained">Click Me</Button>,
  },
];

const rows = [
  { id: 1, name: "John Doe", email: "john@example.com", progress: 80, status: "completed" },
  { id: 2, name: "Jane Smith", email: "jane@example.com", progress: 45, status: "pending" },
  { id: 3, name: "Alice Brown", email: "alice@example.com", progress: 20, status: "failed" },
  { id: 4, name: "Bob Johnson", email: "bob@example.com", progress: 95, status: "completed" },
  { id: 5, name: "Charlie White", email: "charlie@example.com", progress: 60, status: "pending" },
];

export default function ComplexMuiDataGrid() {
  return (
    <Paper sx={{ height: 400, width: "100%", p: 2 }}>
      <DataGrid
        rows={rows}
        columns={columns}
        initialState={{ pagination: { paginationModel: { page: 0, pageSize: 5 } } }}
        pageSizeOptions={[5, 10]}
        sx={{ border: 0 }}
      />
    </Paper>
  );
}
