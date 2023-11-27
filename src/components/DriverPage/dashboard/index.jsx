import React, { useState } from "react";
import { Box, Typography, Button, Input, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material";
import SendOutlinedIcon from "@mui/icons-material/SendOutlined";
import { useLocation } from "react-router-dom";
import CommonTopbar from "../../CommonTopbar";

const DriverPage = () => {
  const location = useLocation();
  const userData = location.state?.userData || {};

  const [inputValues, setInputValues] = useState({
    id:"",
    govid: "",
    name: "",
    surname:"",
    middle:"",
    email: "",
    address: "",
    phone: "",
    password: "",
    access: "",
  });
  const editableFields = ["middleName", "address", "phoneNumber"];

  const [updatedDriverInfo, setUpdatedDriverInfo] = useState({});

  const handleUpdate = () => {
    const updatedDriver = { ...inputValues, ...updatedDriverInfo };
    setInputValues(updatedDriver);
    setUpdatedDriverInfo({});
    // Your update logic goes here
    console.log("Updated Driver Info:", updatedDriver);
  };
  const [routes, setRoutes] = useState([
    { id: 1, status: 'Active', details: 'Route from Nazarbayeva University to Astana Arena', address: '123 Main St' },
    { id: 2, status: 'Pending', details: 'Route from Khan Shatyr to Baiterek', address: '456 Elm St' },
    // Add more routes as needed
  ]);

  // Filter active routes
  const activeRoutes = routes.filter(route => route.status === 'Active');

  const [activeRoute, setActiveRoute] = useState(null);
  const [routeHistory, setRouteHistory] = useState([]);
  const [searchDate, setSearchDate] = useState('');
  const [searchStatus, setSearchStatus] = useState('');

  // Placeholder data for route history
  const routeHistoryData = [
    { id: 3, details: 'Completed Route 1', status: 'Completed', date: '2023-11-20' },
    { id: 4, details: 'Completed Route 2', status: 'Completed', date: '2023-11-19' },
    // Add more route history data as needed
  ];

  // Placeholder data for communication
  const chatMessages = [
    { sender: 'Dispatcher', message: 'Hi, how\'s the route going?', timestamp: '2023-11-20T10:30:00' },
    { sender: 'Driver', message: 'Everything is going smoothly!', timestamp: '2023-11-20T10:35:00' },
    // Add more chat messages as needed
  ];

  const handleStatusChange = (routeId, newStatus) => {
    // Implement logic to change the status of the active route
    // For demonstration purposes, updating the status in the local state
    const updatedRoutes = routes.map(route =>
      route.id === routeId ? { ...route, status: newStatus } : route
    );
    setRoutes(updatedRoutes);

    // Move the route to history if completed
    if (newStatus === 'Completed') {
      const completedRoute = routes.find(route => route.id === routeId);
      setRouteHistory([...routeHistory, { ...completedRoute, date: new Date().toISOString() }]);
    }
  };
  return (
    <Box style={{ maxWidth: "800px", margin: "0 auto", textAlign: "center", padding: "20px" }}>
      
      <h2>Driver Profile</h2>
      <Box style={{ backgroundColor: "#1F2A40" }}>
        <TableContainer component={Box}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Field Names</TableCell>
                <TableCell>Field Values</TableCell>
                <TableCell>Input</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
            {/* <TableRow>
              <TableCell>ID:</TableCell>
              <TableCell>{userData.id}</TableCell>
              <TableCell>
                
              </TableCell>
            </TableRow> */}
            <TableRow>
              <TableCell>GovID:</TableCell>
              <TableCell>{userData.govid}</TableCell>
              <TableCell>
                
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Name:</TableCell>
              <TableCell>{userData.name}</TableCell>
              <TableCell>
                {/* <Input
                  placeholder="Name"
                  value={inputValues.name}
                  onChange={(e) => setInputValues({ ...inputValues, name: e.target.value })}
                  fullWidth
                  margin="dense"
                /> */}
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Surname:</TableCell>
              <TableCell>{userData.surname}</TableCell>
              <TableCell>
                {/* <Input
                  placeholder="Surname"
                  value={inputValues.surname}
                  onChange={(e) => setInputValues({ ...inputValues, surname: e.target.value })}
                  fullWidth
                  margin="dense"
                /> */}
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Middle Name:</TableCell>
              <TableCell>{userData.middle}</TableCell>
              <TableCell>
                {/* <Input
                  placeholder="Middle Name"
                  value={inputValues.middle}
                  onChange={(e) => setInputValues({ ...inputValues, middle: e.target.value })}
                  fullWidth
                  margin="dense"
                /> */}
              </TableCell>
            </TableRow>
            <TableRow></TableRow>
            <TableRow>
              <TableCell>Email:</TableCell>
              <TableCell>{userData.email}</TableCell>
              <TableCell>
                
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Address:</TableCell>
              <TableCell>{userData.address}</TableCell>
              <TableCell>
                <Input
                  placeholder="Address"
                  value={inputValues.address}
                  onChange={(e) => setInputValues({ ...inputValues, address: e.target.value })}
                  fullWidth
                  margin="dense"
                />
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Phone:</TableCell>
              <TableCell>{userData.phone}</TableCell>
              <TableCell>
                <Input
                  placeholder="Phone"
                  value={inputValues.phone}
                  onChange={(e) => setInputValues({ ...inputValues, phone: e.target.value })}
                  fullWidth
                  margin="dense"
                />
              </TableCell>
            </TableRow>
            {/* <TableRow>
              <TableCell>Password:</TableCell>
              <TableCell>{userData.password}</TableCell>
              <TableCell>
                <Input
                  placeholder="Password"
                  value={inputValues.password}
                  onChange={(e) => setInputValues({ ...inputValues, password: e.target.value })}
                  fullWidth
                  margin="dense"
                />
              </TableCell>
            </TableRow>
            
            <TableRow>
              <TableCell>Access:</TableCell>
              <TableCell>{userData.access}</TableCell>
              <TableCell>
                <Input
                  placeholder="Access"
                  value={inputValues.access}
                  onChange={(e) => setInputValues({ ...inputValues, access: e.target.value })}
                  fullWidth
                  margin="dense"
                />
              </TableCell>
            </TableRow> */}
          </TableBody>
          </Table>
        </TableContainer>
        <Button variant="contained" color="primary" style={{ marginTop: "20px", marginBottom: "20px" }} onClick={handleUpdate}>
          Update
        </Button>
      </Box>
      <h2>Assigned Routes</h2>
      <ul style={{ listStyle: 'none', padding: 0 }}>
        {routes.map(route => (
          <li key={route.id} style={{ padding: '5px', marginBottom: '5px', display: 'flex', flexDirection: 'column', backgroundColor: "#1F2A40" }}>
            <span>{route.details}</span>
            {activeRoute && activeRoute.id === route.id && (
              <span>Address: {route.address}</span>
            )}
            <div>
              {/* Use Material-UI Button component instead of regular button */}
              <Button onClick={() => setActiveRoute(route)} variant="contained" color="primary" style={{ marginRight: '5px' }}>
                View Details
              </Button>
              <Button onClick={() => handleStatusChange(route.id, 'Completed')} variant="contained" color="primary" style={{ marginRight: '5px' }}>
                Complete
              </Button>
              <Button onClick={() => handleStatusChange(route.id, 'Canceled')} variant="contained" color="primary" style={{ marginRight: '5px' }}>
                Cancel
              </Button>
              <Button onClick={() => handleStatusChange(route.id, 'Delayed')} variant="contained" color="primary">
                Delay
              </Button>
            </div>
          </li>
        ))}
      </ul>

      <h2>Active Route Details</h2>
      <ul style={{ listStyle: 'none', padding: 0 }}>
        {activeRoutes.map(route => (
          <li key={route.id} style={{ padding: '5px', marginBottom: '5px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', backgroundColor: "#1F2A40" }}>
            <span>{route.details}</span>
            <div>
              {/* Use Material-UI Button component instead of regular button */}
              <Button onClick={() => setActiveRoute(route)} variant="contained" color="primary" style={{ marginRight: '5px' }}>
                View Details
              </Button>
              <Button onClick={() => handleStatusChange(route.id, 'Completed')} variant="contained" color="primary" style={{ marginRight: '5px' }}>
                Complete
              </Button>
              <Button onClick={() => handleStatusChange(route.id, 'Canceled')} variant="contained" color="primary" style={{ marginRight: '5px' }}>
                Cancel
              </Button>
              <Button onClick={() => handleStatusChange(route.id, 'Delayed')} variant="contained" color="primary">
                Delay
              </Button>
            </div>
          </li>
        ))}
      </ul>

      <h2>Route History</h2>
      <div style={{ marginBottom: '20px', backgroundColor: "#1F2A40" }}>
        <input
          type="text"
          placeholder="Search by Date"
          value={searchDate}
          onChange={(e) => setSearchDate(e.target.value)}
        />
        <select
          value={searchStatus}
          onChange={(e) => setSearchStatus(e.target.value)}
        >
          <option value="">All Statuses</option>
          <option value="Completed">Completed</option>
          <option value="Canceled">Canceled</option>
          {/* Add more status options as needed */}
        </select>
        <ul style={{ listStyle: 'none', padding: 0 }}>
          {routeHistoryData
            .filter(route => (searchDate ? route.date.includes(searchDate) : true))
            .filter(route => (searchStatus ? route.status === searchStatus : true))
            .map(route => (
              <li key={route.id}>{route.details} - Status: {route.status} - Date: {route.date}</li>
            ))}
        </ul>
      </div>

      <h2>Communication</h2>
      <div style={{ border: '1px solid #ddd', padding: '10px', maxHeight: '150px', overflowY: 'auto', backgroundColor: "#1F2A40", marginBottom: '10px', position: 'relative' }}>
        {chatMessages.map((message, index) => (
          <div key={index} style={{ marginBottom: '10px', textAlign: message.sender === 'Dispatcher' ? 'left' : 'right' }}>
            <div style={{ padding: '8px', borderRadius: '8px', backgroundColor: message.sender === 'Dispatcher' ? '#3498db' : '#2ecc71', color: '#fff', display: 'inline-block', maxWidth: '70%' }}>
              <strong>{message.sender}:</strong> {message.message}
            </div>
            <span style={{ fontSize: '0.8em', marginLeft: '5px', color: '#aaa' }}>{message.timestamp}</span>
          </div>
        ))}
      </div>

      {/* Input box for writing messages */}
    <div style={{ marginBottom: '20px', display: 'flex' }}>
      <input
        type="text"
        placeholder="Type your message..."
        style={{ flex: 1, padding: '8px', borderRadius: '5px', border: '1px solid #ddd' }}
        // Add onChange and value handlers as needed
      />
      <button style={{ marginLeft: '5px', padding: '8px', borderRadius: '5px', backgroundColor: '#3498db', color: '#fff', border: 'none' }}>
        <SendOutlinedIcon />
      </button>
    </div>
    </Box>
  );
};

export default DriverPage;