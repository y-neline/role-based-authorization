import { ColorModeContext, useMode } from "./theme";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { Routes, Route, Switch, BrowserRouter, Outlet, Link } from "react-router-dom";
import CommonTopbar from "../CommonTopbar";
import Sidebar from "./scenes/global/Sidebar";
import Report from "./scenes/reports/report";
import Team from "./scenes/team/Team";
import Contacts from "./scenes/contacts";
import Invoices from "./scenes/invoices";
import AdminProfile from "./scenes/adminProfile/adminProfile";
import FAQ from "./scenes/faq";
import Bar from "./scenes/bar";
import Pie from "./scenes/pie/Pie";
import Line from "./scenes/line/Line"
import Geography from "./scenes/geography";
import Calendar from "./scenes/calendar";
import Task from "./scenes/assigntask/assigntask";
import CreateUser from "./scenes/createUser/createUser";
import URoutes from "./scenes/route/URoutes";
import "./AdminPage.css";
import RouteDetails from "./scenes/route/RouteDetails";
import TeamDetails from "./scenes/team/TeamDetails";

function App() {
  const [theme, colorMode] = useMode();

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className="adminPage">
          <Sidebar />
          <main className="adminContent">
            <CommonTopbar />
            

            <Routes>
            <Route path="/" element={<AdminProfile />}></Route>
              <Route path="/report" element={<Report />}></Route>
              <Route path="/team" element={<Team />}></Route>
              <Route
                  path="/team/:id"
                  element={<TeamDetails />}
                />
              <Route path="/contacts" element={<Contacts />}></Route>
              <Route path="/invoices" element={<Invoices />}></Route>
              
              <Route path="/createUser" element={<CreateUser />}></Route>
              <Route path="/task" element={<Task />}></Route>
              <Route path="/calendar" element={<Calendar />}></Route>
              <Route path="/faq" element={<FAQ />}></Route>
              <Route path="/route" element={<URoutes />}></Route>
              <Route
                  path="/route/:id"
                  element={<RouteDetails />}
                />
              <Route path="/bar" element={<Bar />}></Route>
              <Route path="/pie" element={<Pie />}></Route>
              <Route path="/line" element={<Line />}></Route>

              <Route path="/geography" element={<Geography />}></Route>
            </Routes>
          </main>
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
