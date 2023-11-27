import React from "react";
import Navbar from "../Navbar";
import CommonTopbar from "../CommonTopbar";
import { ColorModeContext, useMode, tokens } from "../AdminPage/theme";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { Box, IconButton, useTheme } from "@mui/material";

const Services = () => {
  const [theme, colorMode] = useMode();
  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <CommonTopbar />
        <Box style={{ backgroundColor: "#1F2A40", padding: "20px", margin: "10px auto", maxWidth: "800px" }}>
          <h1 style={{ textAlign: "center" }}>Services</h1>
          <p>
          
          The Vehicle Management System (VMS) offers a range of services aimed at efficiently managing vehicle fleets within Nazarbayev University. One of the key functionalities is the registration and assignment of vehicles, where administrators can input details such as make, model, year, license plate, and type. These vehicles can then be assigned to specific drivers, ensuring that a vehicle cannot be simultaneously assigned to multiple drivers. The system also facilitates the creation of tasks exclusively by administrators, providing a comprehensive platform for organizing and managing driver responsibilities.
          </p>
        </Box>

        <Box style={{ backgroundColor: "#1F2A40", padding: "20px", margin: "10px auto", maxWidth: "800px" }}>
          
          <p>
          Real-time tracking using Google Maps is a pivotal feature of the VMS. The Android application displays the real-time locations of vehicles, updating periodically and marking each location on the map with appropriate markers. Administrators can interact with the map, clicking on markers to access additional details about each vehicle. Maintenance and repair tracking is also integrated into the system, allowing both administrators and drivers to log relevant activities for each vehicle. Maintenance history includes service type, date, and cost, with the system generating alerts for scheduled maintenance based on predefined mileage or time intervals.
          </p>
          
        </Box>

        <Box style={{ backgroundColor: "#1F2A40", padding: "20px", margin: "10px auto", maxWidth: "800px" }}>
          
          <p>
          The VMS places a strong emphasis on reporting functionalities, generating comprehensive reports on vehicle usage, fuel consumption, and maintenance history. These reports are accessible and downloadable through both the Android application and the web-based interface. The latter serves as a primary tool for administrators to interact with the system, with maintenance personnel using it to update inventory lists of maintenance parts and jobs. A mobile interface is also available for maintenance personnel, streamlining their tasks and ensuring accessibility on the go.
          </p>
        </Box>
        <Box style={{ backgroundColor: "#1F2A40", padding: "20px", margin: "10px auto", maxWidth: "800px" }}>
          
          <p>
          In terms of user classes, the system caters to drivers, administrative staff, fueling persons, and maintenance personnel, each with distinct rights and permissions. Drivers have access to their assigned vehicle information, personal information, and driving history. Administrative staff can add, update, or delete drivers, fueling persons, and vehicles. Fueling persons can update their limited personal information and perform fueling jobs, while maintenance personnel have access to car information, history, and the ability to update maintenance details. The system's operating environment ensures cross-platform compatibility for the web-based solution and Android application, supporting various operating systems and hardware configurations. The implementation of the VMS adheres to specified backend and frontend tools and frameworks, ensuring a robust and efficient system for Nazarbayev University.
          </p>
        </Box>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
};

export default Services;
