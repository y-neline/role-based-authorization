// Admin.jsx

import React, {useState} from "react";
import { useLocation } from "react-router-dom";
import { Box, Typography, Button, Input, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material";
import { mockDatauserData } from "../../data/mockData";
import { getMockDatauserData, updateMockDatauserData } from "../../data/mockData";

const Admin = () => {
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


  const handleUpdate = () => {
  };

  return (
    <Box style={{
      background: "#1F2A40",
      display: "grid",
      gap: "10px",
      alignItems: "center",
    }} maxWidth="600px" margin="auto">
      <Typography variant="h2" textAlign="center" color="#fff" marginBottom="20px">
        Admin Profile
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
              <TableCell>{userData.id}</TableCell>
              <TableCell>
                
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>GovID:</TableCell>
              <TableCell>{userData.govid}</TableCell>
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
              <TableCell>{userData.name}</TableCell>
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
              <TableCell>{userData.surname}</TableCell>
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
              <TableCell>{userData.middle}</TableCell>
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
              <TableCell>{userData.email}</TableCell>
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
            <TableRow>
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
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
      <Button variant="contained" color="primary" style={{ marginTop: "20px" }} onClick={handleUpdate}>
        Update
      </Button>
    </Box>
  );
};

export default Admin;
