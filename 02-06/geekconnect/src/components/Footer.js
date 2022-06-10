import * as React from 'react';
import Box from '@mui/material/Box';
// import BottomNavigation from '@mui/material/BottomNavigation';
// import BottomNavigationAction from '@mui/material/BottomNavigationAction';
// import RestoreIcon from '@mui/icons-material/Restore';
// import FavoriteIcon from '@mui/icons-material/Favorite';
// import LocationOnIcon from '@mui/icons-material/LocationOn';
import {Typography} from '@mui/material'

export default function Footer() {

  return (
    <Box>
      {/* importing typography */}
       <Typography variant="h6" gutterBottom component="div" align='center'>
         &copy; team
      </Typography> 
    </Box>
  );
}


