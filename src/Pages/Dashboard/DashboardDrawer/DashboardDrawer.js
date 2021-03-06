import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { AppBar, Box, IconButton, List, ListItemButton, ListItemText, Toolbar, Typography } from '@mui/material';
import CssBaseline from '@mui/material/CssBaseline';
import Drawer from '@mui/material/Drawer';
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from 'react-router-dom';
import { Route, Switch, useRouteMatch } from 'react-router';
import useAuth from '../../../hooks/useAuth';
import MyOrders from '../MyOrders/MyOrders';
import AdminRoute from '../../Authentication/AdminRoute/AdminRoute';
import MakeAdmin from '../MakeAdmin/MakeAdmin';
import AddProduct from '../AddProduct/AddProduct';
import ManageOrder from '../ManageOrders/ManageOrder';
import ManageProducts from '../ManageProducts/ManageProducts';
import Feedback from '../Feedback/Feedback';
import Payment from '../Payment/Payment';
import { Home } from '@mui/icons-material';
import User from '../../../Shared/User/User';

const drawerWidth = 240;

const DashboardDrawer = (props) =>{
  const { window } = props;
  const {logOut, admin} = useAuth();
  const [mobileOpen, setMobileOpen] = useState(false); 
  let{path, url} = useRouteMatch()
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
  };

  const drawer = (
    <div>
      <Toolbar />
      <Box sx={{ width: '100%'  }}>
        <List component="nav" aria-label="main mailbox folders">
          {!admin && <>
            <Link style={style} to={`${url}/myOrders`}>
            <ListItemButton
              selected={selectedIndex === 0}
              onClick={(event) => {
                handleListItemClick(event, 0); 
                handleDrawerToggle()
              }}
            >
              <ListItemText primary="My Orders" />
            </ListItemButton>
          </Link>
          <Link style={style} to={`${url}/payment`}>
            <ListItemButton
              selected={selectedIndex === 1}
              onClick={(event) =>{
                handleListItemClick(event, 1)
                handleDrawerToggle()
              }}
            >
              <ListItemText primary="Payment" />
            </ListItemButton>
          </Link>
          <Link style={style} to={`${url}/feedback`}>
            <ListItemButton
              selected={selectedIndex === 2}
              onClick={(event) => {
                handleListItemClick(event, 2)
                handleDrawerToggle()
              }}
            >
              <ListItemText primary="Review" />
            </ListItemButton>
          </Link>
          </>}
          {
            admin && <>
            <Link style={style} to={`${url}/manageOrders`}>
            <ListItemButton
              selected={selectedIndex === 3}
              onClick={(event) => {
                handleListItemClick(event, 3)
                handleDrawerToggle()
              }}
            >
              <ListItemText primary="Manage Orders" />
            </ListItemButton>
          </Link>
            <Link style={style} to={`${url}/addProduct`}>
            <ListItemButton
              selected={selectedIndex === 4}
              onClick={(event) => {
                handleListItemClick(event, 4)
                handleDrawerToggle()
              }}
            >
              <ListItemText primary="Add Product" />
            </ListItemButton>
          </Link>
            <Link style={style} to={`${url}/manageProducts`}>
            <ListItemButton
              selected={selectedIndex === 5}
              onClick={(event) => {
                handleListItemClick(event, 5)
                handleDrawerToggle()
              }}
            >
              <ListItemText primary="Manage Products" />
            </ListItemButton>
          </Link>
          <Link style={style} to={`${url}/makeAdmin`}>
            <ListItemButton
              selected={selectedIndex === 6}
              onClick={(event) => {
                handleListItemClick(event, 6)
                handleDrawerToggle()
              }}
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
          maxWidth: { md: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
          color:'black',          
          boxShadow:'none',
          bgcolor:'rgb(209, 242, 235)'
        }}
      >
        <Toolbar>
          {<IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { md: 'none' } }}
          >
            <MenuIcon />
          </IconButton>}
          <Box sx={{ml:'auto', display:'flex', flexDirection:'row', alignItems:'center'}}>
            <Typography sx={{py:2}} variant="h6" noWrap component="div">
              Dashboard
            </Typography>
            <Link style={style}  to="/" >
              <IconButton sx={{ml:2}} variant='inherit'>
                <Home sx={{ fontSize: 40 }} />
              </IconButton>
            </Link>
            <User/>
          </Box>
        </Toolbar>
      </AppBar>}
      <Box
        component="nav"
        sx={{ width: { md: drawerWidth }, flexShrink: { sm: 0 } }}
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
            display: { xs: 'block', sm: 'block', md:'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', border:0, width: drawerWidth ,color:'white', bgcolor:'rgb(209, 242, 235)'},
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: 'none', sm: 'none', md:'block' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', border:0, width: drawerWidth , color:'white', bgcolor:'rgb(209, 242, 235)'},
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
      <Box
        component="main"
        sx={{ flexGrow: 1, p: 3, width: { md: `calc(100% - ${drawerWidth}px)` } }}
      >
        <Toolbar />
        <Switch>
          {
            admin ? <Route exact path={path}>
            <ManageOrder/>
          </Route>:<Route exact path={path}>
            <MyOrders/>
          </Route>
          }
          
          <Route exact path={`${path}/feedback`}>
            <Feedback/>
          </Route>
          <Route exact path={`${path}/payment`}>
            <Payment/>
          </Route>
          <Route exact path={`${path}/myOrders`}>
            <MyOrders/>
          </Route>
          <AdminRoute path={`${path}/manageOrders`}>
            <ManageOrder/>
          </AdminRoute>
          <AdminRoute path={`${path}/manageProducts`}>
            <ManageProducts/>
          </AdminRoute>
          <AdminRoute path={`${path}/makeAdmin`}>
            <MakeAdmin></MakeAdmin>
          </AdminRoute>
          <AdminRoute path={`${path}/addProduct`}>
            <AddProduct/>
          </AdminRoute>
        </Switch>
      </Box>
    </Box>
  );
}

DashboardDrawer.propTypes = {

  window: PropTypes.func,
};

export default DashboardDrawer;
