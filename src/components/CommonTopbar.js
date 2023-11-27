import React, { useState, useEffect } from 'react';
import { Box, IconButton, useTheme } from '@mui/material';
import { ColorModeContext, tokens } from './theme';
import { InputBase } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import { useContext } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import AlternateEmailOutlinedIcon from '@mui/icons-material/AlternateEmailOutlined';
import SupportAgentOutlinedIcon from '@mui/icons-material/SupportAgentOutlined';

const CommonTopbar = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const colorMode = useContext(ColorModeContext);
  const navigate = useNavigate();
  const location = useLocation();
  const [curPage, setCurPage] = useState(location.pathname); // Initialize with current location

  useEffect(() => {
    // List of pages that should not update curPage
    const excludedPages = ['/about', '/services', '/contact'];
  
    console.log('Current Page:', location.pathname);
    console.log('Excluded Pages:', excludedPages);
  
    // Update curPage only if the current page is not in the excluded list
    if (!excludedPages.includes(location.pathname)) {
      setCurPage(location.pathname);
    }
  }, [location.pathname]);
  

  const handleHomeClick = () => {
    // Navigate to the saved current page location
    navigate(curPage);
  };

  return (
    <Box display="flex" justifyContent="space-between" p={2}>
      {/* SEARCH BAR */}
      <Box display="flex" backgroundColor={colors.primary[400]} borderRadius="3px">
        <InputBase sx={{ ml: 2, flex: 1 }} placeholder="Search" />
        <IconButton type="button" sx={{ p: 1 }}>
          <SearchIcon />
        </IconButton>
      </Box>

      <Box display="flex">

        <Link to="/">
          <IconButton>
            <HomeOutlinedIcon />
          </IconButton>
        </Link>


        <Link to="/about">
          <IconButton>
            <InfoOutlinedIcon />
          </IconButton>
        </Link>

        <Link to="/services">
          <IconButton>
            <SupportAgentOutlinedIcon />
          </IconButton>
        </Link>

        <Link to="/contact">
          <IconButton>
            <AlternateEmailOutlinedIcon />
          </IconButton>
        </Link>
      </Box>
    </Box>
  );
};

export default CommonTopbar;
