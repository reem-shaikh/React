//imported from App Bar from responsive menu 
import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Logo from '../logo.png';
//import Logodark from '../logo_dark.png'
import { Link } from 'react-router-dom';
import ThemeSwitcher from './ThemeSwitcher';
// import { useSelector } from 'react-redux';
import Box from '@mui/material/Box';

const NavigationBar = () => {
  return (
    <Box sx={{ flexGrow: 1 }}  boxShadow="rgba(0, 0, 0, 0.35) 0px 5px 15px;" position="sticky" top="0px" >
    <AppBar position="static" color=''>
    <Toolbar>
          <Link to="/" >
            <img src={Logo} style={{height: "2rem", paddingRight: "1rem"}} alt='logo'/>
          </Link>
             <Typography variant="h6" component="div" sx={{ flexGrow: 1 }} textAlign="center" fontFamily="Times New Roman" fontSize="35px" fontWeight="bolder">  Times of India</Typography>
        
          <ThemeSwitcher/>
        </Toolbar>

    </AppBar>
    </Box>
  );
};
export default NavigationBar;