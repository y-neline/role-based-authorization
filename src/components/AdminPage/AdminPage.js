import { ColorModeContext, useMode } from "./theme";
import { CssBaseline, Switch, ThemeProvider } from "@mui/material";
import { Routes, Route, BrowserRouter, Outlet } from "react-router-dom";
import Topbar from "./scenes/global/Topbar";
import Sidebar from "./scenes/global/Sidebar";
import Dashboard from "./scenes/dashboard";
import Team from "./scenes/team/Team";
import Contacts from "./scenes/contacts";
import Invoices from "./scenes/invoices";
import Form from "./scenes/form";
import FAQ from "./scenes/faq";
import Bar from "./scenes/bar";
import Pie from "./scenes/pie/Pie";
import Line from "./scenes/line";
import Geography from "./scenes/geography";
import Calendar from "./scenes/calendar";
import "./AdminPage.css"



function App() {
  const [theme, colorMode] = useMode();
  
  return ( 
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className="adminPage">
          <Sidebar />
          <main className="adminContent">
            <Topbar />
            
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/team" element={<Team />}/>
              <Route path="/contacts" element={<Contacts />} ></Route>
              <Route path="/invoices" element={<Invoices />} ></Route>
              <Route path="/form" element={<Form />} ></Route>
              <Route path="/calendar" element={<Calendar />} ></Route>
              <Route path="/faq" element={<FAQ />} ></Route>
              <Route path="/bar" element={<Bar />} ></Route>
              <Route path="/pie" element={<Pie />}></Route>
              <Route path="/line" element={<Line />} ></Route>
              
              <Route path="/geography" element={<Geography />} ></Route>
              
            </Routes>
            
          </main>
          
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
