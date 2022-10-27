import { Typography } from "@mui/material";
import AppProvider from "./contexts";
import Home from "./pages/Home";

function App() {
  return (
    <AppProvider>
        <Home />
        <Typography sx={{fontSize: 11}}>Context api</Typography>
    </AppProvider>
  );
}

export default App;
