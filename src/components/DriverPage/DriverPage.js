import { ColorModeContext, useMode } from "./theme";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { Routes, Route, Switch, BrowserRouter, Outlet, Link } from "react-router-dom";
import CommonTopbar from "../CommonTopbar";
import Dashboard from "./dashboard";

function App() {
  const [theme, colorMode] = useMode();

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        
          <main className="driverContent">
            <CommonTopbar />
            

            <Routes>
              <Route path="/" element={<Dashboard />}></Route>
            </Routes>
          </main>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
