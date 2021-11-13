import React from 'react';
import { Box, AppBar, useMediaQuery, useTheme, Button, Toolbar, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import NavDrawer from '../NavDrawer/NavDrawer';
import useAuth from '../../../hooks/useAuth';
import logo from '../../../images/logo.png'

const Navbar = () => {
    const {user, logOut} = useAuth()
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('md'));
    const style = {
        color:'black',
        textDecoration:'none',
        margin:'0px 10px'
    };
    
    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static" sx={{backgroundColor:'rgba(249, 235, 234, 0.6 )', color:'black'}}>
                <Toolbar>
                    <Link to='/'>
                        <img src={logo} alt="" />
                    </Link>
                    {
                        isMobile ? <NavDrawer/> 
                        :
                        <Box sx={{ display: 'flex', alignItems: 'center', ml:'auto' }} >
                            <Link style={style} to="/home" >
                            <Button variant='inherit'>Home</Button>
                            </Link>
                            <Link style={style} to="/products" >
                            <Button variant='inherit'>Furniture</Button>
                            </Link>
                            <Link style={style} to="/About" >
                            <Button variant='inherit'>About Us</Button>
                            </Link>
                            {
                                user?.email ?<>
                                <Link style={style} to="/dashboard" >
                                <Button variant='inherit'>Dashboard</Button>
                                </Link>
                                <Button onClick={() => logOut()} variant='inherit'>Logout </Button>
                                <Typography>{user?.displayName}</Typography>
                                </> 
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