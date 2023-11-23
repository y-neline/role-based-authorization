import React, { useState } from 'react';
import SendOutlinedIcon from '@mui/icons-material/SendOutlined';
import { Button } from '@mui/material'; // Import Button component from Material-UI


const DriverPage = () => {
  // Placeholder data for driver information
  const driverInfo = {
    governmentId: '123456789',
    name: 'John',
    surname: 'Doe',
    middleName: 'Lorem',
    address: 'Lorem Ipsum Street, City',
    phoneNumber: '555-555-5555',
    email: 'john.doe@example.com',
    licenseCode: 'ABC123XYZ456',
    // ... (other details)
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
    <div style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center', padding: '20px' }}>
      <h2>Driver Information</h2>
      <div style={{ backgroundColor: "#1F2A40", padding: '10px', marginBottom: '20px' }}>
        <p>Government ID: {driverInfo.governmentId}</p>
        <p>Name: {driverInfo.name}</p>
        <p>Surname: {driverInfo.surname}</p>
        <p>Middle Name: {driverInfo.middleName}</p>
        <p>Address: {driverInfo.address}</p>
        <p>Phone Number: {driverInfo.phoneNumber}</p>
        <p>Email: {driverInfo.email}</p>
        <p>Driving License Code: {driverInfo.licenseCode}</p>
      </div>

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
        <ul>
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
    </div>
  );
};

export default DriverPage;
