import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Box, Typography, Button, Input, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material";

import { mockDataTeam } from "../../data/mockData";
import { getMockDataTeam, updateMockDataTeam } from "../../data/mockData";

const TeamDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const team = mockDataTeam.find((r) => r.id === parseInt(id, 10));

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

  const handleUpdate = () => {
    const updatedTeams = getMockDataTeam().map((r) => {
      if (r.id === parseInt(id, 10)) {
        // Update only the fields with non-empty input
        return {
          ...r,
          id: inputValues.id.length > 0 ? inputValues.id : r.id,
          
          govid: inputValues.govid.length > 0 ? inputValues.govid : r.govid,

          name: inputValues.name.length > 0 ? inputValues.name : r.name,

          surname: inputValues.surname.length > 0 ? inputValues.surname : r.surname,

          middle: inputValues.middle.length > 0 ? inputValues.middle : r.middle,

          email: inputValues.email.length > 0 ? inputValues.email : r.email,

          address: inputValues.address.length > 0 ? inputValues.address : r.address,

          phone: inputValues.phone.length > 0 ? inputValues.phone : r.phone,

          password: inputValues.password.length > 0 ? inputValues.password : r.password,

          access: inputValues.access.length > 0 ? inputValues.access : r.access,
          // ... other fields
        };
      }
      return r;
    });

    // Update the data using the function from mockData.js
    updateMockDataTeam(updatedTeams);

    console.log("Updated Team:", inputValues);
    navigate("/admin/team");
  };
  
  

  if (!team) {
    return (
      <Box>
        <Typography variant="h6">Team not found</Typography>
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
        User Details
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
              <TableCell>{team.id}</TableCell>
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
              <TableCell>GovID:</TableCell>
              <TableCell>{team.govid}</TableCell>
              <TableCell>
                <Input
                  placeholder="GovID"
                  value={inputValues.govid}
                  onChange={(e) => setInputValues({ ...inputValues, govid: e.target.value })}
                  fullWidth
                  margin="dense"
                />
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Name:</TableCell>
              <TableCell>{team.name}</TableCell>
              <TableCell>
                <Input
                  placeholder="Name"
                  value={inputValues.name}
                  onChange={(e) => setInputValues({ ...inputValues, name: e.target.value })}
                  fullWidth
                  margin="dense"
                />
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Surname:</TableCell>
              <TableCell>{team.surname}</TableCell>
              <TableCell>
                <Input
                  placeholder="Surname"
                  value={inputValues.surname}
                  onChange={(e) => setInputValues({ ...inputValues, surname: e.target.value })}
                  fullWidth
                  margin="dense"
                />
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Middle Name:</TableCell>
              <TableCell>{team.middle}</TableCell>
              <TableCell>
                <Input
                  placeholder="Middle Name"
                  value={inputValues.middle}
                  onChange={(e) => setInputValues({ ...inputValues, middle: e.target.value })}
                  fullWidth
                  margin="dense"
                />
              </TableCell>
            </TableRow>
            <TableRow></TableRow>
            <TableRow>
              <TableCell>Email:</TableCell>
              <TableCell>{team.email}</TableCell>
              <TableCell>
                <Input
                  placeholder="Email"
                  value={inputValues.email}
                  onChange={(e) => setInputValues({ ...inputValues, email: e.target.value })}
                  fullWidth
                  margin="dense"
                />
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Address:</TableCell>
              <TableCell>{team.address}</TableCell>
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
              <TableCell>{team.phone}</TableCell>
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
            <TableRow>
              <TableCell>Password:</TableCell>
              <TableCell>{team.password}</TableCell>
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
              <TableCell>{team.access}</TableCell>
              <TableCell>
                <Input
                  placeholder="Access"
                  value={inputValues.access}
                  onChange={(e) => setInputValues({ ...inputValues, access: e.target.value })}
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

export default TeamDetails;
