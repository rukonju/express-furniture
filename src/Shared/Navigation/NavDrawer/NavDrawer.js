import React, { useState } from 'react';
import { Box as Menu, MenuItem, Drawer, IconButton, Button } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import User from '../../User/User';

const NavDrawer = () => {
    const [openDrawer, setOpenDrawer] = useState(false);
    const {user, logOut} = useAuth();


    const style ={
        textDecoration:'none',
        color:'black'
    }
    return (
        <>
            <IconButton sx={{ml:'auto'}} onClick={() => setOpenDrawer(!openDrawer)}>
                <MenuIcon sx={{ fontSize: 40, color: 'black' }} />
            </IconButton>
            <User/>
            <Drawer
            anchor="right"
            open={openDrawer}
            onClose={() => setOpenDrawer(false)}
            >     
            <Menu
                id="basic-menu"
                MenuListProps={{
                  'aria-labelledby': 'basic-button',
                }}
                sx={{ display: 'flex', flexDirection:'column', alignItems:'start' }} >
                <IconButton 
                    size="large"
                    edge="start"
                    aria-label="menu"
                    onClick={() => setOpenDrawer(false)}
                    
                >
                <CloseIcon />
                </IconButton>
                <MenuItem sx={{width:'100%'}} >
                    <Link style={style} to="/home" >Home</Link>
                </MenuItem>
                <MenuItem sx={{width:'100%'}} >
                    <Link style={style} to="/products" >Furniture</Link>
                </MenuItem>
                <MenuItem sx={{width:'100%'}} >
                    <Link style={style} to="/About" >About Us</Link>
                </MenuItem>
                {
                    user?.email ?<>
                    <MenuItem sx={{width:'100%'}} >
                        <Link style={style} to="/dashboard" >Dashboard</Link>
                    </MenuItem>
                    <MenuItem  onClick={() => logOut()} > <Button size='small' variant='contained'>Logout</Button>  </MenuItem>
                    </> 
                    :
                    <MenuItem >
                        <Link style={style} to="/login" >Login</Link>
                    </MenuItem>
                } 
            </Menu>
        </Drawer>
      </>
    );
};

export default NavDrawer;