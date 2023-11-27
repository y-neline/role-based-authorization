import React from 'react'
import { Box, IconButton, useTheme} from "@mui/material";
import { ColorModeContext, tokens } from './AdminPage/theme';
//import InputBase from "@mui/material/InputBase";
import { InputBase } from '@mui/material';
import LightModeOutlinedIcon from "@mui/icons-material/LightModeOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import SearchIcon from "@mui/icons-material/Search";
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import AlternateEmailOutlinedIcon from '@mui/icons-material/AlternateEmailOutlined';
import SupportAgentOutlinedIcon from '@mui/icons-material/SupportAgentOutlined';

const LoginTopbar = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const colorMode = useContext(ColorModeContext);
  return (
    <Box display="flex" justifyContent="right" p={2}>
      {/*SEARCH BAR */}
      {/* <Box 
        display="flex" backgroundColor={colors.primary[400]} borderRadius="3px">
        <InputBase sx={{ml: 2, flex: 1}} placeholder="Search" />
        <IconButton type="button" sx={{p: 1}}>
          <SearchIcon/>
        </IconButton>
      </Box> */}
      {/*<Box 
        display="flex" backgroundColor={colors.primary[400]} borderRadius="3px">
        <InputBase sx={{ml: 2, flex: 1}} placeholder="Search" />
        <IconButton type="button" sx={{p: 1}}>
          <SearchIcon/>
        </IconButton>
      </Box> */}

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

        {/* <IconButton onClick={colorMode.toggleColorMode}>
          {theme.palette.mode === 'dark' ? (
            <DarkModeOutlinedIcon />
          ) : (
            <LightModeOutlinedIcon />
          )}
        </IconButton>
        
        <IconButton>
          <InfoOutlinedIcon />
        </IconButton> */}
        
        
          
        

      </Box>
    </Box>
  )
}

export default LoginTopbar
