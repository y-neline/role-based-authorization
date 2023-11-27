import React, { useState } from 'react';
import {
  Box,
  Typography,
  useTheme,
  Button,
  Input,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TextField,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from '@mui/material';
import SendOutlinedIcon from "@mui/icons-material/SendOutlined";
import { useLocation } from "react-router-dom";


const MaintenancePersonPage = () => {
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

  const [updatedMaintenanceInfo, setUpdatedMaintenanceInfo] = useState({});

  const handleUpdate = () => {
    const updatedInfo = { ...inputValues, ...updatedMaintenanceInfo };
    setInputValues(updatedInfo);
    setUpdatedMaintenanceInfo({});
    // Your update logic goes here
    console.log("Updated Maintenance Info:", updatedInfo);
  };

  const theme = useTheme();

  const [vehicleDetails, setVehicleDetails] = useState({
    carInformation: "",
    mileage: "",
    dateAndTime: "",
    plateNumber: "",
    maintenanceJobDescription: "",
    status: "active",
  });

  const [addedParts, setAddedParts] = useState([]); // Added state for addedParts
  const [partName, setPartName] = useState(""); // Added state for partName

  const [jobDetails, setJobDetails] = useState({
    jobTitle: "",
    jobDescription: "",
  });

  const [repairingParts, setRepairingParts] = useState([]);
  const [partNumber, setPartNumber] = useState("");
  const [partCondition, setPartCondition] = useState("");
  const [partCost, setPartCost] = useState(0);
  const [totalMaintenanceCost, setTotalMaintenanceCost] = useState(0);
  const [partImage, setPartImage] = useState(null);

  const handleInputChange = (e, section) => {
    const { name, value } = e.target;
    if (section === "vehicleDetails") {
      setVehicleDetails({ ...vehicleDetails, [name]: value });
    } else if (section === "repairingParts") {
      setPartCost(0); // Reset part cost when part details are changed
      setPartNumber("");
      setPartCondition("");
    }
  };
  const handleJobInputChange = (e) => {
    const { name, value } = e.target;
    setJobDetails({ ...jobDetails, [name]: value });
  };

  const handleAddJob = () => {
    // Perform validation if needed
    // Add logic to handle job assignment submission
    console.log("Job Assignment submitted with data:", jobDetails);
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
      setPartName(""); // Reset partName when part details are changed
      setPartCondition("");
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
    console.log("Form submitted with data:", {
      vehicleDetails,
      repairingParts,
      totalMaintenanceCost,
      partImage,
    });
  };

  return (
    <div style={{ maxWidth: "600px", margin: "auto" }}>
      {/**New line */}
      <div style={{ textAlign: "center" }}>
        <div style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center', padding: '20px' }}>
      <h2>Maintenance Person Profile</h2>
      <Box style={{ backgroundColor: '#1F2A40', padding: '20px', borderRadius: '8px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', marginBottom: '20px' }}>
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
        <Button variant="contained" color="primary" style={{ marginTop: '20px', marginBottom: '20px' }} onClick={handleUpdate}>
          Update
        </Button>
      </Box>
      {/* Rest of your code */}
    </div>

        {/* Job Assignment Section */}
        <h2>Job Assignment Details</h2>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            handleAddJob();
          }}
          style={{
            background: "#1F2A40",
            padding: "20px",
            borderRadius: "8px",
            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
            marginBottom: "20px",
          }}
        >
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
        <h2>Update Vehicle Details</h2>
        <form
          onSubmit={handleSubmit}
          style={{
            background: "#1F2A40",
            padding: "20px",
            borderRadius: "8px",
            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
            marginBottom: "20px",
          }}
        >
          <TextField
            label="Car Information"
            variant="outlined"
            fullWidth
            margin="normal"
            name="carInformation"
            value={vehicleDetails.carInformation}
            onChange={(e) => handleInputChange(e, "vehicleDetails")}
          />

          <TextField
            label="Mileage"
            variant="outlined"
            fullWidth
            margin="normal"
            name="mileage"
            value={vehicleDetails.mileage}
            onChange={(e) => handleInputChange(e, "vehicleDetails")}
          />

          <TextField
            label="Date and Time"
            variant="outlined"
            fullWidth
            margin="normal"
            type="datetime-local"
            name="dateAndTime"
            value={vehicleDetails.dateAndTime}
            onChange={(e) => handleInputChange(e, "vehicleDetails")}
          />

          <TextField
            label="Plate Number"
            variant="outlined"
            fullWidth
            margin="normal"
            name="plateNumber"
            value={vehicleDetails.plateNumber}
            onChange={(e) => handleInputChange(e, "vehicleDetails")}
          />

          <TextField
            label="Maintenance Job Description"
            variant="outlined"
            fullWidth
            margin="normal"
            name="maintenanceJobDescription"
            value={vehicleDetails.maintenanceJobDescription}
            onChange={(e) => handleInputChange(e, "vehicleDetails")}
          />

          <FormControl fullWidth margin="normal">
            <InputLabel>Status</InputLabel>
            <Select
              value={vehicleDetails.status}
              onChange={(e) => handleInputChange(e, "vehicleDetails")}
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
      </div>

      {/* Repairing Parts Section */}
      {/* Repairing Parts Section */}
      <div style={{ textAlign: "center" }}>
        <h2> Repairing Parts</h2>
      </div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          handleAddPart();
        }}
        style={{
          background: "#1F2A40",
          padding: "20px",
          borderRadius: "8px",
          boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
          marginBottom: "20px", // Add margin to separate sections
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            marginBottom: "10px",
          }}
        >
          <TextField
            type="text"
            value={partName}
            onChange={(e) => setPartName(e.target.value)}
            placeholder="Part Name"
            variant="outlined"
            style={{ flex: 1, marginRight: "10px" }}
          />
          <TextField
            type="text"
            value={partCondition}
            onChange={(e) => setPartCondition(e.target.value)}
            placeholder="Part Condition"
            variant="outlined"
            style={{ flex: 1, marginRight: "10px" }}
          />
          <TextField
            type="number"
            value={partCost}
            onChange={(e) => setPartCost(parseFloat(e.target.value))}
            placeholder="Part Cost"
            variant="outlined"
            style={{ flex: 1, marginRight: "10px" }}
          />
          <Button type="submit" variant="contained" color="primary">
            Add Part
          </Button>
        </div>

        {/* Display Inputted Values Below "Add Part" Line */}
        {addedParts.length > 0 && (
          <div style={{ marginBottom: "10px" }}>
            {addedParts.map((part, index) => (
              <div key={index} style={{ marginBottom: "5px" }}>
                Part Name: {part.partName}, Condition: {part.partCondition},
                Cost: ${part.partCost.toFixed(2)}
              </div>
            ))}
          </div>
        )}

        {/* Update Total Maintenance Cost */}
        <div style={{ marginBottom: "20px" }}>
          <Typography
            variant="body1"
            style={{
              display: "block",
              color: theme.palette.mode === "dark" ? "#fff" : "#000",
            }}
          >
            Total Maintenance Cost: ${totalMaintenanceCost.toFixed(2)}
          </Typography>
        </div>
        {/* Separate Box for Images and Part Numbers */}

        {/* Separate Box Content */}
        <FormControl fullWidth style={{ marginBottom: "20px" }}>
          <InputLabel>Upload Part Image</InputLabel>
          <input
            type="file"
            onChange={handleUploadImage}
            style={{ display: "none" }}
          />
          <Button
            variant="outlined"
            component="label"
            color="primary"
            style={{ color: "#666" }}
          >
            Choose File
          </Button>
        </FormControl>

        {/* Submit Repairing Parts Button */}
        <Button type="submit" variant="contained" color="primary" fullWidth>
          Submit Repairing Parts
        </Button>
      </form>
    </div>
  );
};

export default MaintenancePersonPage;
