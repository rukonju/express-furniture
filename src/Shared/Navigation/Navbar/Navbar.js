import React from 'react';
import { Box, AppBar, useMediaQuery, useTheme, Typography, Button, Toolbar } from '@mui/material';
import { Link } from 'react-router-dom';
import NavDrawer from '../NavDrawer/NavDrawer';
import useAuth from '../../../hooks/useAuth';


const Navbar = () => {
    const {user, logOut} = useAuth()
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('md'));
    const style = {
        color:'white',
        textDecoration:'none',
        margin:'0px 10px'
      }
    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static">
                <Toolbar>
                    <Typography variant="h6" component="div" >
                        Furniture
                    </Typography>
                    {
                        isMobile ? <NavDrawer/> 
                        :
                        <Box sx={{ display:'inline', ml:'auto' }} >
                            <Link style={style} to="/" >
                            <Button variant='inherit'>Home</Button>
                            </Link>
                            <Link style={style} to="/dashboard" >
                            <Button variant='inherit'>Dashboard</Button>
                            </Link>
                            {
                                user?.email ? <Button onClick={() => logOut()} variant='inherit'>Logout {user?.displayName}</Button>
                                :
                                <Link style={style} to="/login" >
                                    <Button variant='inherit'>Login</Button>
                                </Link>
                            }
                            
                        </Box>
                    }
                </Toolbar>
            </AppBar>
        </Box> 
    );
};

export default Navbar;