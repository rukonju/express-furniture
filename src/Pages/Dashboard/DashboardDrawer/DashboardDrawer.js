import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { AppBar, Box, Button, IconButton, List, ListItemButton, ListItemText, Toolbar, Typography } from '@mui/material';
import CssBaseline from '@mui/material/CssBaseline';
import { Outlet } from 'react-router-dom';
import Drawer from '@mui/material/Drawer';
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';

const drawerWidth = 240;

const DashboardDrawer = (props) =>{
  const { window } = props;
  const {logOut, admin} = useAuth();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [defaultRouteForAdmin, setDefaultRouteForAdmin] = useState(true) 
  const [defaultRouteForUser, setDefaultRouteForUser] = useState(true) 

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const [selectedIndex, setSelectedIndex] = useState(0);

  const handleListItemClick = (event, index) => {
    setSelectedIndex(index);
    if(admin){
      setDefaultRouteForAdmin(false);
      setDefaultRouteForUser(true)
    }
    if(!admin){
      setDefaultRouteForUser(false)
      setDefaultRouteForAdmin(true);
    }
  };

  const drawer = (
    <div>
      <Toolbar />
      <Box sx={{ width: '100%'  }}>
        <List component="nav" aria-label="main mailbox folders">
          {!admin && <>
            <Link to='myOrder'>
            <ListItemButton
              selected={selectedIndex === 0}
              onClick={(event) => handleListItemClick(event, 0)}
            >
              <ListItemText primary="My Orders" />
            </ListItemButton>
          </Link>
          <Link to='payment'>
            <ListItemButton
              selected={selectedIndex === 1}
              onClick={(event) => handleListItemClick(event, 1)}
            >
              <ListItemText primary="Payment" />
            </ListItemButton>
          </Link>
          <Link to='feedback'>
            <ListItemButton
              selected={selectedIndex === 2}
              onClick={(event) => handleListItemClick(event, 2)}
            >
              <ListItemText primary="Review" />
            </ListItemButton>
          </Link>
          </>}
          {
            admin && <>
            <Link to='addProduct'>
            <ListItemButton
              selected={selectedIndex === 3}
              onClick={(event) => handleListItemClick(event, 3)}
            >
              <ListItemText primary="Add Product" />
            </ListItemButton>
          </Link>
          <Link to='admin'>
            <ListItemButton
              selected={selectedIndex === 4}
              onClick={(event) => handleListItemClick(event, 4)}
            >
              <ListItemText primary="Make admin" />
            </ListItemButton>
          </Link>
          </>
          }

          <ListItemButton
            onClick={() =>logOut()}
          >
            <ListItemText primary="Logout" />
          </ListItemButton>
        </List>
      </Box> 
    </div>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      {<AppBar
        position="fixed"
        sx={{
          maxWidth: { sm: '100%' },
          color:'white',
          boxShadow:'none',
          bgcolor:'rgb(14, 102, 85)'
        }}
      >
        <Toolbar>
          {<IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>}
          <Typography variant="h6" noWrap component="div">
            Dashboard
          </Typography>
          <Link  to="/" >
            <Button variant='inherit'>Home</Button>
          </Link>
        </Toolbar>
      </AppBar>}
      <Box
        component="nav"
        sx={{ maxWidth: { sm: '25%' }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Drawer
          style={{backgroundColor:'#f9ebea'}}
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: '25%', border:'0px',
            bgcolor:'rgb(115, 198, 182 )' },
            
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          style={{backgroundColor:'#f9ebea'}}
          variant="permanent"
          sx={{
            display: { xs: 'none', sm: 'block' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: '25vw' , border:'0px',
            bgcolor:'rgb(115, 198, 182 )', position:'inherit', height:'100vh'},
            
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
      <Box
        component="main"
        sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` } }}
      >
        <Toolbar />
        
        <Outlet/>
        

        
        
      </Box>
    </Box>
  );
}

DashboardDrawer.propTypes = {

  window: PropTypes.func,
};

export default DashboardDrawer;
