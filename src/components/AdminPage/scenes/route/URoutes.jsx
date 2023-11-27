import { Box, Typography, useTheme } from "@mui/material";
import React, { useState, useEffect } from "react";
import { DataGrid } from "@mui/x-data-grid";
import { tokens } from "../../theme";
import { mockDataRoute } from "../../data/mockData";
import AdminPanelSettingsOutlinedIcon from "@mui/icons-material/AdminPanelSettingsOutlined";
import LockOpenOutlinedIcon from "@mui/icons-material/LockOpenOutlined";
import SecurityOutlinedIcon from "@mui/icons-material/SecurityOutlined";
import LocalGasStationOutlinedIcon from '@mui/icons-material/LocalGasStationOutlined';
import ConstructionOutlinedIcon from '@mui/icons-material/ConstructionOutlined';
import DirectionsCarFilledOutlinedIcon from '@mui/icons-material/DirectionsCarFilledOutlined';
import Header from "../../components/Header";
import CheckOutlinedIcon from '@mui/icons-material/CheckOutlined';
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';
import PauseCircleOutlineOutlinedIcon from '@mui/icons-material/PauseCircleOutlineOutlined';
import { useNavigate } from "react-router-dom";

const Route = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const navigate = useNavigate();
  const [routeData, setRouteData] = useState(mockDataRoute);


  const handleRowDoubleClick = (params) => {
    // Navigate to the details page when a row is double-clicked
    navigate(`/admin/route/${params.id}`);
  };
  useEffect(() => {
    // Update route data if needed when the component mounts or when dependencies change
    setRouteData(mockDataRoute);
  }, [/* add dependencies if needed */]);


  const columns = [
    { field: "id", 
      headerName: "ID",
      flex: 0.5, 
    },
    {
      field: "driverID",
      headerName: "Driver ID",
      flex: 0.5,
    },
    {
      field: "plate",
      headerName: "Plate",
      flex: 0.5,
    },
    {
      field: "date",
      headerName: "Date",
      flex: 0.5,
      
    },
    {
      field: "routeFrom",
      headerName: "From",
      flex: 1,
      
    },
    {
      field: "routeFromAddress",
      headerName: "Address",
      flex: 0.5,
    },
    {
      field: "routeTo",
      headerName: "To",
      flex: 0.5,
    },
    {
      field: "routeToAddress",
      headerName: "Address",
      flex: 0.5,
    },
    {
      field: "status",
      headerName: "Status",
      flex: 1,
      headerAlign: "center",
      renderCell: ({row: {status}}) =>{
        return (
            <Box
                width="60%"
                m="0 auto"
                p="5px"
                display="flex"
                justifyContent="center"
                backgroundColor={
                    status === "completed"
                    ? colors.greenAccent[600]
                    : colors.greenAccent[700]
                }
                borderRadius="4px"
            >
                {status === "completed" && <CheckOutlinedIcon />}
                {status === "delayed" && <PauseCircleOutlineOutlinedIcon />}
                {status === "canceled" && <CloseOutlinedIcon />}
                <Typography color={colors.grey[100]} sx={{ ml: "5px"}}>
                    {status}
                </Typography>
            </Box>
        )
      }
    },
    
  ];
  return (
    <Box m="20px">
      <Header title="Routes Information" subtitle="Managing the Routes" />
      <Box
        m="40px 0 0 0" height="75vh"
        sx={{
            "& .MuiDataGrid-root":{
                border: "none",

            },
            "& .MuiDataGrid-cell": {
                borderBottom: "none",
            },
            "& .name-column--cell": {
                color: colors.greenAccent[300]
            },
            "& .MuiDataGrid-columnHeaders":{
                backgroundColor: colors.blueAccent[700],
                borderBottom: "none"
            },
            "& .MuiDataGrid-virtualScroller":{
                backgroundColor: colors.primary[400],
            },
            "& .MuiDataGrid-footerContainer":{
                borderTop: "none",
                backgroundColor: colors.blueAccent[700],
            },

            
            
        }}
      >
        <DataGrid rows={mockDataRoute} columns={columns} onRowDoubleClick={handleRowDoubleClick} />
      </Box>
    </Box>
  );
};

export default Route;
