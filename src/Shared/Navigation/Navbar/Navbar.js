import React from 'react';
import { Box, AppBar, useMediaQuery, useTheme, Button, Toolbar } from '@mui/material';
import { Link } from 'react-router-dom';
import NavDrawer from '../NavDrawer/NavDrawer';
import useAuth from '../../../hooks/useAuth';
import logo from '../../../images/logo.png'
import User from '../../User/User';

const Navbar = () => {
    const {user} = useAuth()
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('md'));
    const style = {
        color:'black',
        textDecoration:'none',
        margin:'0px 10px'
    };
    
    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static" sx={{backgroundColor:'rgba(232, 246, 243 )', color:'black'}}>
                <Toolbar>
                    <Link to='/'>
                        <img src={logo} alt="" width='100%' />
                    </Link>
                    {
                        isMobile ? <NavDrawer /> 
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
                                <User/>
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