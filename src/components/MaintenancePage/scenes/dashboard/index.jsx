import React, { useState } from 'react';
import {
  Box,
  Button,
  Typography,
  useTheme,
  TextField,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from '@mui/material';

const MaintenancePersonPage = () => {
  const theme = useTheme();

  const [vehicleDetails, setVehicleDetails] = useState({
    carInformation: '',
    mileage: '',
    dateAndTime: '',
    plateNumber: '',
    maintenanceJobDescription: '',
    status: 'active',
  });

  
  const [addedParts, setAddedParts] = useState([]); // Added state for addedParts
  const [partName, setPartName] = useState(''); // Added state for partName

  const [jobDetails, setJobDetails] = useState({
    jobTitle: '',
    jobDescription: '',
  });

  const [repairingParts, setRepairingParts] = useState([]);
  const [partNumber, setPartNumber] = useState('');
  const [partCondition, setPartCondition] = useState('');
  const [partCost, setPartCost] = useState(0);
  const [totalMaintenanceCost, setTotalMaintenanceCost] = useState(0);
  const [partImage, setPartImage] = useState(null);

  const handleInputChange = (e, section) => {
    const { name, value } = e.target;
    if (section === 'vehicleDetails') {
      setVehicleDetails({ ...vehicleDetails, [name]: value });
    } else if (section === 'repairingParts') {
      setPartCost(0); // Reset part cost when part details are changed
      setPartNumber('');
      setPartCondition('');
    }
  };
  const handleJobInputChange = (e) => {
    const { name, value } = e.target;
    setJobDetails({ ...jobDetails, [name]: value });
  };

  const handleAddJob = () => {
    // Perform validation if needed
    // Add logic to handle job assignment submission
    console.log('Job Assignment submitted with data:', jobDetails);
  };


  const handleAddPart = () => {
    if (partName && partCondition && partCost > 0) {
      const newPart = {
        partName,
        partCondition,
        partCost,
      };

      setAddedParts([...addedParts, newPart]); // Updated to use setAddedParts
      setTotalMaintenanceCost(totalMaintenanceCost + partCost);
      setPartName(''); // Reset partName when part details are changed
      setPartCondition('');
      setPartCost(0);
    }
  };

  const calculateTotalCost = () => {
    const partsCost = repairingParts.reduce(
      (total, part) => total + parseFloat(part.partCost),
      0
    );
    setTotalMaintenanceCost(partsCost);
  };

  const handleUploadImage = (e) => {
    const file = e.target.files[0];
    setPartImage(file);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Here, you can send the data to the backend or perform further actions
    console.log('Form submitted with data:', {
      vehicleDetails,
      repairingParts,
      totalMaintenanceCost,
      partImage,
    });
  };

  return (
    <div style={{ maxWidth: '600px', margin: 'auto' }}>
      <h1 style={{ textAlign: 'center', color: '#fff' }}>Maintenance Person Page</h1>
 {/* Job Assignment Section */}
      <form
        onSubmit={(e) => {
          e.preventDefault();
          handleAddJob();
        }}
        style={{
          background: '#1F2A40',
          padding: '20px',
          borderRadius: '8px',
          boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
          marginBottom: '20px',
        }}
      >
        <Typography variant="h6" style={{ color: theme.palette.mode === 'dark' ? '#fff' : '#000' }}>
          Job Assignment Details
        </Typography>

        <TextField
          label="License Plate"
          variant="outlined"
          fullWidth
          margin="normal"
          name="licensePlate"
          value={jobDetails.licensePlate}
          onChange={handleJobInputChange}
          inputProps={{ maxLength: 10 }} // Set the maximum length of the input
        />


        <TextField
          label="Job Description"
          variant="outlined"
          fullWidth
          multiline
          rows={3}
          margin="normal"
          name="jobDescription"
          value={jobDetails.jobDescription}
          onChange={handleJobInputChange}
        />

        <Button type="submit" variant="contained" color="primary">
          Submit Job Assignment
        </Button>
      </form>

      {/* Vehicle Details Section */}
      <form
        onSubmit={handleSubmit}
        style={{
          background: '#1F2A40',
          padding: '20px',
          borderRadius: '8px',
          boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
          marginBottom: '20px',
        }}
      >
        <Typography variant="h6" style={{ color: theme.palette.mode === 'dark' ? '#fff' : '#000' }}>
          Update Vehicle Details
        </Typography>

        <TextField
          label="Car Information"
          variant="outlined"
          fullWidth
          margin="normal"
          name="carInformation"
          value={vehicleDetails.carInformation}
          onChange={(e) => handleInputChange(e, 'vehicleDetails')}
        />

        <TextField
          label="Mileage"
          variant="outlined"
          fullWidth
          margin="normal"
          name="mileage"
          value={vehicleDetails.mileage}
          onChange={(e) => handleInputChange(e, 'vehicleDetails')}
        />

        <TextField
          label="Date and Time"
          variant="outlined"
          fullWidth
          margin="normal"
          type="datetime-local"
          name="dateAndTime"
          value={vehicleDetails.dateAndTime}
          onChange={(e) => handleInputChange(e, 'vehicleDetails')}
        />

        <TextField
          label="Plate Number"
          variant="outlined"
          fullWidth
          margin="normal"
          name="plateNumber"
          value={vehicleDetails.plateNumber}
          onChange={(e) => handleInputChange(e, 'vehicleDetails')}
        />

        <TextField
          label="Maintenance Job Description"
          variant="outlined"
          fullWidth
          margin="normal"
          name="maintenanceJobDescription"
          value={vehicleDetails.maintenanceJobDescription}
          onChange={(e) => handleInputChange(e, 'vehicleDetails')}
        />

        <FormControl fullWidth margin="normal">
          <InputLabel>Status</InputLabel>
          <Select
            value={vehicleDetails.status}
            onChange={(e) => handleInputChange(e, 'vehicleDetails')}
            label="Status"
            name="status"
          >
            <MenuItem value="active">Active</MenuItem>
            <MenuItem value="non-active">Non-Active</MenuItem>
          </Select>
        </FormControl>

        <Button type="submit" variant="contained" color="primary">
          update
        </Button>
      </form>

      {/* Repairing Parts Section */}
     {/* Repairing Parts Section */}
<form
  onSubmit={(e) => {
    e.preventDefault();
    handleAddPart();
  }}
  style={{
    background: '#1F2A40',
    padding: '20px',
    borderRadius: '8px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    marginBottom: '20px', // Add margin to separate sections
  }}
>
  <Typography variant="h6" style={{ color: theme.palette.mode === 'dark' ? '#fff' : '#000' }}>
    Repairing Parts
  </Typography>

  <div style={{ display: 'flex', alignItems: 'center', marginBottom: '10px' }}>
    <TextField
      type="text"
      value={partName}
      onChange={(e) => setPartName(e.target.value)}
      placeholder="Part Name"
      variant="outlined"
      style={{ flex: 1, marginRight: '10px' }}
    />
    <TextField
      type="text"
      value={partCondition}
      onChange={(e) => setPartCondition(e.target.value)}
      placeholder="Part Condition"
      variant="outlined"
      style={{ flex: 1, marginRight: '10px' }}
    />
    <TextField
      type="number"
      value={partCost}
      onChange={(e) => setPartCost(parseFloat(e.target.value))}
      placeholder="Part Cost"
      variant="outlined"
      style={{ flex: 1, marginRight: '10px' }}
    />
    <Button type="submit" variant="contained" color="primary">
      Add Part
    </Button>
  </div>

  {/* Display Inputted Values Below "Add Part" Line */}
  {addedParts.length > 0 && (
    <div style={{ marginBottom: '10px' }}>
      {addedParts.map((part, index) => (
        <div key={index} style={{ marginBottom: '5px' }}>
          Part Name: {part.partName}, Condition: {part.partCondition}, Cost: ${part.partCost.toFixed(2)}
        </div>
      ))}
    </div>
  )}

  {/* Update Total Maintenance Cost */}
  <div style={{ marginBottom: '20px' }}>
    <Typography
      variant="body1"
      style={{
        display: 'block',
        color: theme.palette.mode === 'dark' ? '#fff' : '#000',
      }}
    >
      Total Maintenance Cost: ${totalMaintenanceCost.toFixed(2)}
    </Typography>
  </div>
</form>

{/* Separate Box for Images and Part Numbers */}
<div style={{
  background: '#1F2A40',
  padding: '20px',
  borderRadius: '8px',
  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
  marginBottom: '20px', // Add margin to separate sections
}}>
  {/* Separate Box Content */}
  <FormControl fullWidth style={{ marginBottom: '20px' }}>
    <InputLabel>Upload Part Image</InputLabel>
    <input type="file" onChange={handleUploadImage} style={{ display: 'none' }} />
    <Button variant="outlined" component="label" color="primary" style={{ color: '#666' }}>
      Choose File
    </Button>
  </FormControl>

  {/* Submit Repairing Parts Button */}
  <Button type="submit" variant="contained" color="primary" fullWidth>
    Submit Repairing Parts
  </Button>
</div>
    </div>
  );
};

export default MaintenancePersonPage;
