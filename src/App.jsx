import { useState } from 'react'
import './App.css'
import MuiTable from "./components/MuiTable";
import UserCard from "./components/UserCard";
import { createTheme, CssBaseline, ThemeProvider, Typography } from '@mui/material';
import Grid from '@mui/material/Grid2';
import MuiDataGrid from './components/MuiDataGrid';
import ComplexMuiDataGrid from './components/ComplexMuiDataGrid';
import ExpandableMuiDataGrid from './components/ExpandableMuiDataGrid';

const lightTheme = createTheme({
  palette: {
    mode: "light",
    primary: { main: "#646cff" },
    background: { default: "#ffffff", paper: "#f9f9f9" },
    text: { primary: "#213547" },
  },
}
);

const testData = [
  { id: 1, name: "Johs", address: "1010 Provo", email: "test@test.com", age: 35, country: "USA" },
  { id: 2, name: "Andrii", address: "1030 Provo", email: "test1@test.com", age: 36, country: "USA" },
  { id: 3, name: "Gregory", address: "1040 Provo", email: "test2@test.com", age: 40, country: "USA" },
  { id: 4, name: "Daniel", address: "1040 Provo", email: "test2@test.com", age: 40, country: "USA" },
  { id: 5, name: "Emily", address: "1040 Provo", email: "test2@test.com", age: 40, country: "USA" },
  { id: 6, name: "Sophia", address: "1040 Provo", email: "test2@test.com", age: 40, country: "USA" },
]

function App() {
  const [selectedUser, setSelectedUser] = useState(null);

  return (
    <ThemeProvider theme={lightTheme}>
      <CssBaseline></CssBaseline>
      <Grid container spacing={4} sx={{ marginTop: 2 }}>
        <Grid size={{ xs: 12, md: 12 }}>
          {<UserCard user={selectedUser} />}
        </Grid>
        <Grid size={{ md: 12 }}>
          <Typography sx={{ fontSize: 20 }}>Simple grid with event</Typography>
          <MuiTable onRowSelect={setSelectedUser} testData={testData} />
        </Grid>
        <Grid size={{ md: 12 }}>
          <Typography sx={{ fontSize: 20 }}>DataGrid grid with sorting</Typography>
          <MuiDataGrid onRowSelect={setSelectedUser} rows={testData} />
        </Grid>
        <Grid size={{ md: 12 }}>
          <Typography sx={{ fontSize: 20 }}>Complex grid</Typography>
          <ComplexMuiDataGrid></ComplexMuiDataGrid>
        </Grid>
        <Grid size={{ md: 12 }}>
          <Typography sx={{ fontSize: 20 }}>Grid with nested rows</Typography>
          <ExpandableMuiDataGrid></ExpandableMuiDataGrid>
        </Grid>
      </Grid>
    </ThemeProvider>
  )
}

export default App;
