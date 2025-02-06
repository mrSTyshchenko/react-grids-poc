import { useState } from 'react'
import './App.css'
import MuiTable from "./components/MuiTable";
import UserCard from "./components/UserCard";
import { createTheme, CssBaseline, ThemeProvider } from '@mui/material';

const lightTheme = createTheme({
  palette: {
    mode: "light",
    primary: { main: "#646cff" },
    background: { default: "#ffffff", paper: "#f9f9f9" },
    text: { primary: "#213547" },
  },
}
);

function App() {
  const [selectedUser, setSelectedUser] = useState(null);

  return (
    <ThemeProvider theme={lightTheme}>
      <CssBaseline></CssBaseline>
      <MuiTable onRowSelect={setSelectedUser} />
      {selectedUser && <UserCard user={selectedUser} />}
    </ThemeProvider>
  )
}

export default App;
