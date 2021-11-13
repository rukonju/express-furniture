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
  const style = {
    color:'black',
    textDecoration:'none'
  }
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
            <Link style={style} to='myOrder'>
            <ListItemButton
              selected={selectedIndex === 0}
              onClick={(event) => handleListItemClick(event, 0)}
            >
              <ListItemText primary="My Orders" />
            </ListItemButton>
          </Link>
          <Link style={style} to='payment'>
            <ListItemButton
              selected={selectedIndex === 1}
              onClick={(event) => handleListItemClick(event, 1)}
            >
              <ListItemText primary="Payment" />
            </ListItemButton>
          </Link>
          <Link style={style} to='feedback'>
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
            <Link style={style} to='manageOrders'>
            <ListItemButton
              selected={selectedIndex === 3}
              onClick={(event) => handleListItemClick(event, 3)}
            >
              <ListItemText primary="Manage Orders" />
            </ListItemButton>
          </Link>
            <Link style={style} to='addProduct'>
            <ListItemButton
              selected={selectedIndex === 3}
              onClick={(event) => handleListItemClick(event, 3)}
            >
              <ListItemText primary="Add Product" />
            </ListItemButton>
          </Link>
            <Link style={style} to='manageProducts'>
            <ListItemButton
              selected={selectedIndex === 3}
              onClick={(event) => handleListItemClick(event, 3)}
            >
              <ListItemText primary="Manage Products" />
            </ListItemButton>
          </Link>
          <Link style={style} to='admin'>
            <ListItemButton
              selected={selectedIndex === 4}
              onClick={(event) => handleListItemClick(event, 4)}
            >
              <ListItemText primary="Make admin" />
            </ListItemButton>
          </Link>
          </>
          }
          <Link style={style} to='/login'>
          <ListItemButton
            onClick={() =>logOut()}
            >
            <ListItemText primary="Logout" />
          </ListItemButton>
            </Link>
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
          maxWidth: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
          color:'white',
          
          boxShadow:'none',
          bgcolor:'rgb(115, 198, 182)'
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
          <Box sx={{ml:'auto', display:'flex', flexDirection:'row'}}>

          <Typography  variant="h6" noWrap component="div">
            Dashboard
          </Typography>
          <Link style={style}  to="/" >
            <Button sx={{textAlign:'right'}} variant='inherit'>Back to Home</Button>
          </Link>
          </Box>
        </Toolbar>
      </AppBar>}
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Drawer
          
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', border:0, width: drawerWidth , bgcolor:'rgb(115, 198, 182)'},
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: 'none', sm: 'block' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', border:0, width: drawerWidth , bgcolor:'rgb(115, 198, 182)'},
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
