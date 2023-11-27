import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Box, Typography, Button, Input, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material";

import { mockDataRoute } from "../../data/mockData";
import { getMockDataRoute, updateMockDataRoute } from "../../data/mockData";

const RouteDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const route = mockDataRoute.find((r) => r.id === parseInt(id, 10));

  const [inputValues, setInputValues] = useState({
    routeFrom: "",
    routeTo: "",
    routeFromAddress: "",
    routeToAddress: "",
    status: "",
    date: "",
    plate: "",
  });

  const handleUpdate = () => {
    const updatedRoutes = getMockDataRoute().map((r) => {
      if (r.id === parseInt(id, 10)) {
        // Update only the fields with non-empty input
        return {
          ...r,
          routeFrom: inputValues.routeFrom.length > 0 ? inputValues.routeFrom : r.routeFrom,

          routeTo: inputValues.routeTo.length > 0 ? inputValues.routeTo : r.routeTo,

          routeFromAddress: inputValues.routeFromAddress.length > 0 ? inputValues.routeFromAddress : r.routeFromAddress,

          routeToAddress: inputValues.routeToAddress.length > 0 ? inputValues.routeToAddress : r.routeToAddress,

          status: inputValues.status.length > 0 ? inputValues.status : r.status,

          date: inputValues.date.length > 0 ? inputValues.date : r.date,

          plate: inputValues.plate.length > 0 ? inputValues.plate : r.plate,
          // ... other fields
        };
      }
      return r;
    });

    // Update the data using the function from mockData.js
    updateMockDataRoute(updatedRoutes);

    console.log("Updated Route:", inputValues);
    navigate("/admin/route");
  };
  
  

  if (!route) {
    return (
      <Box>
        <Typography variant="h6">Route not found</Typography>
      </Box>
    );
  }

  return (
    <Box style={{
      background: "#1F2A40",
          display: "grid",
          gap: "10px",
          alignItems: "center",
    }} maxWidth="600px" margin="auto">
      <Typography variant="h2" textAlign="center" color="#fff" marginBottom="20px">
        Route Details
      </Typography>
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
            <TableRow>
              <TableCell>ID:</TableCell>
              <TableCell>{route.id}</TableCell>
              <TableCell>
                <Input
                  placeholder="ID"
                  value={inputValues.id}
                  onChange={(e) => setInputValues({ ...inputValues, id: e.target.value })}
                  fullWidth
                  margin="dense"
                />
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Driver ID:</TableCell>
              <TableCell>{route.driverID}</TableCell>
              <TableCell>
                <Input
                  placeholder="Driver ID"
                  value={inputValues.driverID}
                  onChange={(e) => setInputValues({ ...inputValues, driverID: e.target.value })}
                  fullWidth
                  margin="dense"
                />
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>From:</TableCell>
              <TableCell>{route.routeFrom}</TableCell>
              <TableCell>
                <Input
                  placeholder="From"
                  value={inputValues.routeFrom}
                  onChange={(e) => setInputValues({ ...inputValues, routeFrom: e.target.value })}
                  fullWidth
                  margin="dense"
                />
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>To:</TableCell>
              <TableCell>{route.routeTo}</TableCell>
              <TableCell>
                <Input
                  placeholder="To"
                  value={inputValues.routeTo}
                  onChange={(e) => setInputValues({ ...inputValues, routeTo: e.target.value })}
                  fullWidth
                  margin="dense"
                />
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>From Address:</TableCell>
              <TableCell>{route.routeFromAddress}</TableCell>
              <TableCell>
                <Input
                  placeholder="From Address"
                  value={inputValues.routeFromAddress}
                  onChange={(e) => setInputValues({ ...inputValues, routeFromAddress: e.target.value })}
                  fullWidth
                  margin="dense"
                />
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>To Address:</TableCell>
              <TableCell>{route.routeToAddress}</TableCell>
              <TableCell>
                <Input
                  placeholder="To Address"
                  value={inputValues.routeToAddress}
                  onChange={(e) => setInputValues({ ...inputValues, routeToAddress: e.target.value })}
                  fullWidth
                  margin="dense"
                />
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Status:</TableCell>
              <TableCell>{route.status}</TableCell>
              <TableCell>
                <Input
                  placeholder="Status"
                  value={inputValues.status}
                  onChange={(e) => setInputValues({ ...inputValues, status: e.target.value })}
                  fullWidth
                  margin="dense"
                />
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Date:</TableCell>
              <TableCell>{route.date}</TableCell>
              <TableCell>
                <Input
                  placeholder="Date"
                  value={inputValues.date}
                  onChange={(e) => setInputValues({ ...inputValues, date: e.target.value })}
                  fullWidth
                  margin="dense"
                />
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Plate:</TableCell>
              <TableCell>{route.plate}</TableCell>
              <TableCell>
                <Input
                  placeholder="Plate"
                  value={inputValues.plate}
                  onChange={(e) => setInputValues({ ...inputValues, plate: e.target.value })}
                  fullWidth
                  margin="dense"
                />
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
      <Button variant="contained" color="primary"  style={{ marginTop: "20px" }} onClick={handleUpdate}>
        Update
      </Button>
    </Box>
  );
};

export default RouteDetails;
