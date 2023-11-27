import { useRef, useState, useEffect } from "react";
import useAuth from "../hooks/useAuth";
import { Link, useNavigate, useLocation } from "react-router-dom";
import Navbar from "./Navbar";
import Topbar from "./AdminPage/scenes/global/Topbar";
import LoginTopbar from "./LoginTopbar";
import { ColorModeContext, useMode } from "./AdminPage/theme";
import { CssBaseline, ThemeProvider } from "@mui/material";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Services from "./pages/Services";
import { Routes, Route, Switch, BrowserRouter, Outlet } from "react-router-dom";
import { mockDataTeam } from "./AdminPage/data/mockData";

import axios from "../api/axios";
const LOGIN_URL = "/auth";

const Login = () => {
  const [theme, colorMode] = useMode();



  const { setAuth } = useAuth();

  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  const userRef = useRef();
  const errRef = useRef();

  const [user, setUser] = useState("");
  const [pwd, setPwd] = useState("");
  const [errMsg, setErrMsg] = useState("");

  useEffect(() => {
    userRef.current.focus();
  }, []);

  useEffect(() => {
    setErrMsg("");
  }, [user, pwd]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      const userCredentials = { user, pwd };
  
      // Check if user credentials match mock data
      const matchingUser = mockDataTeam.find(
        (user) => user.email === userCredentials.user && user.password === userCredentials.pwd
      );
  
      if (!matchingUser) {
        setErrMsg("Invalid Username or Password");
        errRef.current.focus();
        return;
      }
  
      // If credentials match, set access level
      const access = matchingUser.access;
  
      // Depending on the access level, navigate to the corresponding page
      switch (access) {
        case "admin":
          // Navigate to the admin page
          navigate("/admin", { state: { userData: matchingUser } });
          break;
        case "fueling":
          // Navigate to the fueling page
          navigate("/fueling", { state: { userData: matchingUser } });
          break;
        case "maintenance":
          // Navigate to the maintenance page
          navigate("/maintenance", { state: { userData: matchingUser } });
          break;
        case "driver":
          // Navigate to the driver page
          navigate("/driver", { state: { userData: matchingUser } });
          break;
        // Add cases for other access levels as needed
        default:
          // Navigate to a default page or handle accordingly
          break;
      }
  
      // Rest of your code remains unchanged
      setAuth({ user, pwd, roles: [access], accessToken: "yourAccessToken" });
      setUser("");
      setPwd("");
    } catch (err) {
      // Handle errors as before
      if (!err?.response) {
        setErrMsg("No Server Response");
      } else if (err.response?.status === 400) {
        setErrMsg("Missing Username or Password");
      } else if (err.response?.status === 401) {
        setErrMsg("Unauthorized");
      } else {
        setErrMsg("Login Failed");
      }
      errRef.current.focus();
    }
  };
  

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
    <div>
      <LoginTopbar />
      <section>
        <p
          ref={errRef}
          className={errMsg ? "errmsg" : "offscreen"}
          aria-live="assertive"
        >
          {errMsg}
        </p>
        <h1>Sign In</h1>
        <form onSubmit={handleSubmit}>
          <label htmlFor="username">Email:</label>
          <input
            type="text"
            id="username"
            ref={userRef}
            autoComplete="off"
            onChange={(e) => setUser(e.target.value)}
            value={user}
            required
          />

          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            onChange={(e) => setPwd(e.target.value)}
            value={pwd}
            required
          />
          <button>Sign In</button>
        </form>
        {/* <p>
          Need an Account?
          <br />
          <span className="line">
            <Link to="/register">Sign Up</Link>
          </span>
        </p> */}
        <p>
          <span className="line">
            <Link to="/register">Forgot Password?</Link>
          </span>
        </p> 
      </section>
      
    </div>
    </ThemeProvider>
    </ColorModeContext.Provider>
  );
};

export default Login;
