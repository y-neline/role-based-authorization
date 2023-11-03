import React from 'react';
import {CssBaseline, Grid} from '@material-ui/core';
import Navbar from "./components/Navbar"
import Topbar from './components/AdminPage/scenes/global/Topbar';
import Register from './components/Register';
import Login from './components/Login';
import Home from './components/Home';
import Layout from './components/Layout';
import Fueling from './components/Fueling';
import Admin from './components/Admin/Admin';
import AdminPage from './components/AdminPage/AdminPage';
import Maintenance from './components/Maintenance';
import Missing from './components/Missing';
import Unauthorized from './components/Unauthorized';
import Driver from './components/Driver';
import MainPage from './components/MainPage/MainPage';
import RequireAuth from './components/RequireAuth';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import MainHome from './components/pages/MainHome';
import Contact from './components/pages/Contact';
import About from './components/pages/About';
import Services from './components/pages/Services';
import Team from './components/AdminPage/scenes/team/Team';

{/*
import React from 'react';
import ReactDOM from 'react-dom';
import './App.css';
import App from './App';
import { AuthProvider } from './context/AuthProvider';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

ReactDOM.render(<App />, document.getElementById("root"));
*/}

const ROLES = {
  'User': 2001,
  'Fueling': 1984,
  'AdminPage': 5150,
  'Driver': 6001,
  'Maintenance': 7984
}

function App() {

  return (
    <BrowserRouter>
    

    <Routes>
      
      <Route path="/" element={<MainPage />}></Route>
        {/* public routes 
        <Route path="mainpage" element={<MainPage />} ></Route>*/}
        <Route path="login" element={<Login />} ></Route>
        <Route path="register" element={<Register />} ></Route>
        <Route path="unauthorized" element={<Unauthorized />} ></Route>

        
        {/*Additionally added */}
        <Route path="/" element={<MainHome/>} ></Route>
        <Route path="/about" element={<About/>} ></Route>
        <Route path="/contact" element={<Contact/>} ></Route>
        <Route path="/services" element={<Services/>} ></Route>
        {/* we want to protect these routes CHANGED*/}

        
        <Route path="home" element={<Home />} ></Route>
        <Route path="fueling" element={<Fueling />} ></Route>
        <Route path="admin/*" element={<AdminPage />} ></Route>



        <Route path="maintenance" element={<Maintenance />} ></Route>
        <Route path="driver" element={<Driver />} ></Route>
        

        {/*the original*/}
        {/* <Route element={<RequireAuth allowedRoles={[ROLES.User]} />}>
          <Route path="/" element={<Home />} />
        </Route>

        <Route element={<RequireAuth allowedRoles={[ROLES.Fueling]} />}>
          <Route path="fueling" element={<Fueling />} />
        </Route>


        <Route element={<RequireAuth allowedRoles={[ROLES.Admin]} />}>
          <Route path="admin" element={<Admin />} />
        </Route>

        <Route element={<RequireAuth allowedRoles={[ROLES.Fueling, ROLES.Admin]} />}>
          <Route path="lounge" element={<Lounge />} />
        </Route> */}

        {/* catch all */}
       
        
        <Route path="*" element={<></>} ></Route>
      
    </Routes>
    </BrowserRouter>
  );
}

export default App;