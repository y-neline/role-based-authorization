import React, { useState } from 'react';
import {
  Box,
  Button,
  Typography,
  useTheme,
  FormControlLabel,
  Checkbox,
  Grid,
} from '@mui/material';

const ReportGenerationPage = () => {
  const theme = useTheme();

  const [selectedReports, setSelectedReports] = useState({
    vehicleUsage: false,
    driverPerformance: false,
    maintenanceAndRepair: false,
    fuelConsumption: false,
    costAnalysis: false,
    vehicleAvailability: false,
    routeAndNavigation: false,
    auction: false,
  });

  const handleReportSelection = (report) => {
    setSelectedReports((prevSelectedReports) => ({
      ...prevSelectedReports,
      [report]: !prevSelectedReports[report],
    }));
  };

  const handleGenerateReport = () => {
    // Logic to generate selected reports
    console.log('Generating Reports:', selectedReports);
  };

  return (
    <div style={{ maxWidth: '600px', margin: 'auto' }}>
      <Typography variant="h4" style={{ textAlign: 'center', color: '#fff', marginBottom: '20px' }}>
        Report Generation
      </Typography>

      {/* Report Selection Section */}
      <Box
        style={{
          background: '#1F2A40',
          borderRadius: '8px',
          boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
          marginBottom: '20px',
          border: '1px solid #fff', // Add border
        }}
      >
        <Typography variant="h6" style={{ color: theme.palette.mode === 'dark' ? '#fff' : '#000', padding: '20px' }}>
          Select Reports
        </Typography>

        <Grid container spacing={1} style={{ padding: '20px' }}>
          {Object.entries(selectedReports).map(([report, isSelected]) => (
            <Grid key={report} item xs={6}>
              <FormControlLabel
                control={
                  <Checkbox
                    checked={isSelected}
                    onChange={() => handleReportSelection(report)}
                  />
                }
                label={report.charAt(0).toUpperCase() + report.slice(1).replace(/([A-Z])/g, ' $1')}
                style={{ margin: 0 }} // Reduce space between label and checkbox
              />
            </Grid>
          ))}
        </Grid>

        {/* Generate Report Button */}
        <Box style={{ textAlign: 'center', paddingBottom: '20px' }}>
          <Button
            variant="contained"
            color="primary"
            onClick={handleGenerateReport}
          >
            Generate Report
          </Button>
        </Box>
      </Box>
    </div>
  );
};

export default ReportGenerationPage;
