import React from "react";
import { DataGrid } from "@mui/x-data-grid";
import { Paper } from "@mui/material";

const columns = [
    { field: 'id', headerName: 'ID', width: 70 },
    { field: 'name', headerName: 'Name', width: 130 },
    { field: 'address', headerName: 'Address', width: 130 },
    { field: 'email', headerName: 'Email', width: 130 },
    {
      field: 'age',
      headerName: 'Age',
      type: 'number',
      width: 90,
    },
    { field: 'country', headerName: 'Country', width: 130 },
  ];
    
  const paginationModel = { page: 0, pageSize: 5 };

export default function MuiDataGrid({onRowSelect, rows}){
    return (
        <Paper sx={{ height: 400, width: '100%' }}>
          <DataGrid
            rows={rows}
            columns={columns}
            initialState={{ pagination: { paginationModel } }}
            pageSizeOptions={[5, 10]}
            onRowSelectionModelChange={(selection) => {
                // Find the selected row data
                const selectedRow = rows.find((row) => row.id === selection[0]);
                onRowSelect(selectedRow); // Pass selected row to parent
              }}           
            sx={{ border: 0 }}
          />
        </Paper>
      );
};
