import React, { useState } from "react";
import { DataGrid } from "@mui/x-data-grid";
import { Paper, Button, LinearProgress, Collapse, Box, Typography } from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import CancelIcon from "@mui/icons-material/Cancel";
import PendingIcon from "@mui/icons-material/HourglassEmpty";

const ExpandableMuiDataGrid = () => {
  const [expandedRows, setExpandedRows] = useState({});

  const toggleRow = (id) => {
    setExpandedRows((prev) => ({ ...prev, [id]: !prev[id] }));
  };

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
      field: "expand",
      headerName: "More Info",
      width: 130,
      renderCell: (params) => (
        <Button
          variant="contained"
          onClick={() => toggleRow(params.row.id)}
          startIcon={expandedRows[params.row.id] ? <ExpandLessIcon /> : <ExpandMoreIcon />}
        >
          {expandedRows[params.row.id] ? "Hide" : "Expand"}
        </Button>
      ),
    },
  ];

  const rows = [
    { id: 1, name: "John Doe", email: "john@example.com", progress: 80, status: "completed", details: "John is a software engineer from NY." },
    { id: 2, name: "Jane Smith", email: "jane@example.com", progress: 45, status: "pending", details: "Jane is a product manager from LA." },
    { id: 3, name: "Alice Brown", email: "alice@example.com", progress: 20, status: "failed", details: "Alice is a designer from SF." },
    { id: 4, name: "Bob Johnson", email: "bob@example.com", progress: 95, status: "completed", details: "Bob is a data scientist from TX." },
    { id: 5, name: "Charlie White", email: "charlie@example.com", progress: 60, status: "pending", details: "Charlie is a frontend developer from Chicago." },
  ];

  return (
    <Paper sx={{ width: "100%", p: 2 }}>
      <DataGrid
        rows={rows}
        columns={columns}
        disableRowSelectionOnClick
        initialState={{ pagination: { paginationModel: { page: 0, pageSize: 5 } } }}
        pageSizeOptions={[5, 10]}
        sx={{ border: 0 }}
      />

      {/* Expandable Rows Section */}
      {rows.map((row) => (
        <Collapse key={row.id} in={expandedRows[row.id]} timeout="auto" unmountOnExit>
          <Box sx={{ p: 2, bgcolor: "#f5f5f5", mt: 1, borderRadius: 2 }}>
            <Typography variant="body1"><strong>Additional Info:</strong> {row.details}</Typography>
          </Box>
        </Collapse>
      ))}
    </Paper>
  );
};

export default ExpandableMuiDataGrid;
