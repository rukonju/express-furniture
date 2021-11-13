import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { AppBar, Box, Button, IconButton, List, ListItemButton, ListItemText, Toolbar, Typography } from '@mui/material';
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
              onClick={(event) => handleListItemClick(event, 0)}
            >
              <ListItemText primary="My Orders" />
            </ListItemButton>
          </Link>
          <Link style={style} to={`${url}/payment`}>
            <ListItemButton
              selected={selectedIndex === 1}
              onClick={(event) => handleListItemClick(event, 1)}
            >
              <ListItemText primary="Payment" />
            </ListItemButton>
          </Link>
          <Link style={style} to={`${url}/feedback`}>
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
            <Link style={style} to={`${url}/manageOrders`}>
            <ListItemButton
              selected={selectedIndex === 3}
              onClick={(event) => handleListItemClick(event, 3)}
            >
              <ListItemText primary="Manage Orders" />
            </ListItemButton>
          </Link>
            <Link style={style} to={`${url}/addProduct`}>
            <ListItemButton
              selected={selectedIndex === 3}
              onClick={(event) => handleListItemClick(event, 3)}
            >
              <ListItemText primary="Add Product" />
            </ListItemButton>
          </Link>
            <Link style={style} to={`${url}/manageProducts`}>
            <ListItemButton
              selected={selectedIndex === 3}
              onClick={(event) => handleListItemClick(event, 3)}
            >
              <ListItemText primary="Manage Products" />
            </ListItemButton>
          </Link>
          <Link style={style} to={`${url}/makeAdmin`}>
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
            <Button variant='inherit'>Back to Home</Button>
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
