import React, { useState } from 'react';
import { Box, Divider, Drawer, IconButton, List, ListItem, ListItemText } from '@mui/material';
import Menu from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import { Link } from 'react-router-dom';

const NavDrawer = () => {
    const [openDrawer, setOpenDrawer] = useState(false);
    return (
        <>
        <IconButton sx={{textAlign:'right', ml:'auto'}} onClick={() => setOpenDrawer(!openDrawer)}>
        <Menu sx={{ color: 'white' }} />
      </IconButton>
        <Drawer
        anchor="right"
        open={openDrawer}
        onClose={() => setOpenDrawer(false)}
      >
        <Box>
            <IconButton 
                size="large"
                edge="start"
                aria-label="menu"
                onClick={() => setOpenDrawer(false)}
                
            >
                <CloseIcon />
            </IconButton>
        <List sx={{p:0}}>
            
        
        <ListItem onClick={() => setOpenDrawer(false)}>
            <ListItemText>
                <Link to="/" >Home</Link>
            </ListItemText>
        </ListItem>
        <Divider/>
        <ListItem onClick={() => setOpenDrawer(false)}>
            <ListItemText>
                <Link to="/login" >login</Link>
            </ListItemText>
        </ListItem>
        <Divider/>
        <ListItem onClick={() => setOpenDrawer(false)}>
            <ListItemText>
                <Link to="/dashboard" >Dashboard</Link>
            </ListItemText>
        </ListItem>
        <Divider/>
        <ListItem onClick={() => setOpenDrawer(false)}>
            <ListItemText>
                <Link to="/about" >Faq</Link>
            </ListItemText>
        </ListItem>
      <Divider/>
    </List>
        </Box>
      </Drawer>
      
      </>
    );
};

export default NavDrawer;