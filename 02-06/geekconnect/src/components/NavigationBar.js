//imported from App Bar from responsive menu 
import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Logo from '../logo.png';
//import Logodark from '../logo_dark.png'
import { Link } from 'react-router-dom';
import ThemeSwitcher from './ThemeSwitcher';
// import { useSelector } from 'react-redux';

const NavigationBar = () => {
  // const theme = useSelector(state => state.theme);

  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
        {/* whenever the user clicks on the logo / brand name we'll redirect the user to the home page  */}
        <Link to="/">
             <img src={Logo} style={{height: "2rem", paddingRight: "1rem"}} alt='logo'/>
            {/*           
            {theme ? (
              <img src={Logodark} style={{height: "2rem", paddingRight: "1rem"}} alt='logo'/>
            ) : (
              <img src={Logo} style={{height: "2rem", paddingRight: "1rem"}} alt='logo'/>
            )} */}
        </Link>

          <Link to='/'>
          <Typography
            variant="h6"
            noWrap
            component="a"
            //we commented this out since were placing a Link tag instead 
           // href="/"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 700,
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            GeekConnect
          </Typography>
          </Link>
          <ThemeSwitcher/>
          
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default NavigationBar;