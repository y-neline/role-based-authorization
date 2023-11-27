import React from "react";
import Navbar from "../Navbar";
import CommonTopbar from "../CommonTopbar";
import { ColorModeContext, useMode, tokens } from "../AdminPage/theme";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { Box, IconButton, useTheme } from "@mui/material";

const About = () => {
  const [theme, colorMode] = useMode();
  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <CommonTopbar />
        <Box style={{ backgroundColor: "#1F2A40", padding: "20px", margin: "10px auto", maxWidth: "800px" }}>
          <h1 style={{ textAlign: "center" }}>About us</h1>
          <p>
            The Vehicle Management System (VMS) is a comprehensive software solution designed for the purpose of managing vehicle fleets efficiently. This document outlines the software requirements for developing a VMS that integrates with Google Maps and is accessible through an Android application and Web-based solution. The system aims to provide students with hands-on experience in developing real-world applications.
          </p>
        </Box>

        <Box style={{ backgroundColor: "#1F2A40", padding: "20px", margin: "10px auto", maxWidth: "800px" }}>
          <h2 style={{ textAlign: "center" }}>Intended Audience and Reading Suggestions</h2>
          <p>
            This document is provided as a course project for students of the course CSCI 361 of Nazarbayev University to make a software system using the requirements written here.
          </p>
        </Box>

        <Box style={{ backgroundColor: "#1F2A40", padding: "20px", margin: "10px auto", maxWidth: "800px" }}>
          <h2 style={{ textAlign: "center" }}>Product Scope</h2>
          <p>
            The primary objective of the Vehicle Management system is to offer fundamental functionalities that enable the Nazarbayev University administration to streamline vehicle management processes for enhanced administration. This includes online vehicle booking by staff members, vehicle maintenance oversight, driver assignment, real-time vehicle tracking, driver performance assessment, scheduling of driver duties, and comprehensive management of these aspects. The VMS will allow users to:
          </p>
          <ul style={{ listStylePosition: "inside", textAlign: "left" }}>
            <li>Register vehicles in the system.</li>
            <li>Assign vehicles to drivers.</li>
            <li>Monitor vehicle locations using Google Maps.</li>
            <li>Track vehicle maintenance and repair history.</li>
            <li>Generate reports on vehicle usage and maintenance.</li>
            <li>Access the system through an Android application.</li>
            <li>Route Information with checkpoints to track to driver</li>
          </ul>
        </Box>

        <Box style={{ backgroundColor: "#1F2A40", padding: "20px", margin: "10px auto", maxWidth: "800px" }}>
          <h2 style={{ textAlign: "center" }}>Overall description</h2>
          <p>
            Product Perspective The system should represent newly written software. The software must represent an Android application system written with the use of Android SDK, Google built-in API for map services, and a development platform. The system should also be accessible from a web-based interface implemented using popular web-based frameworks such as ReactJS, Java Server Pages (JSP), Java Servlets, NodeJS, and Django.
          </p>
        </Box>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
};

export default About;
