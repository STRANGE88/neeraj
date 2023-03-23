import React from 'react'
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import { Typography } from '@mui/material';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div>
         <Box sx={{flexGrow: 1 }}>
         <AppBar position="static"> 
     <Toolbar>
             <Typography>HELLO</Typography>
            <Button color='inherit' ><Link to="/add" style={{color:'white'}}>ADD</Link></Button>
         <Button color='inherit' ><Link to="/ssss"  style={{color:'white'}}>Teacher</Link>
        
         </Button>
         <Button color='inherit' ><Link to="/read" style={{color:'white'}}>
          STUDENTS</Link></Button>
        </Toolbar>
          </AppBar>
       </Box>
    </div>
  )
}

export default Navbar
